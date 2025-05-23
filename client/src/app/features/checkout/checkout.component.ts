import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { OrderSummaryComponent } from "../../shared/components/order-summary/order-summary.component";
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { StripeService } from '../../core/services/stripe.service';
import { ConfirmationToken, StripeAddressElement, StripeAddressElementChangeEvent, StripePaymentElement, StripePaymentElementChangeEvent } from '@stripe/stripe-js';
import { SnackbarService } from '../../core/services/snackbar.service';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Address } from '../../shared/models/user';
import { firstValueFrom } from 'rxjs';
import { AccountService } from '../../core/services/account.service';
import { CheckoutDeliveryComponent } from "./checkout-delivery/checkout-delivery.component";
import { CheckoutReviewComponent } from "./checkout-review/checkout-review.component";
import { CartService } from '../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { OrderToCreate, ShippingAddress } from '../../shared/models/order';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-checkout',
  imports: [
    OrderSummaryComponent,
    MatStepperModule,
    RouterLink,
    MatButton,
    MatCheckboxModule,
    CheckoutDeliveryComponent,
    CheckoutReviewComponent,
    CurrencyPipe,
    MatProgressSpinnerModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private accountService = inject(AccountService);
  private orderService = inject(OrderService);
  private stripeService = inject(StripeService);
  private snackbar = inject(SnackbarService);
  private router = inject(Router);
  cartService = inject(CartService)
  addressElement?: StripeAddressElement;
  paymentElement?: StripePaymentElement;
  saveAddress = false;
  confirmationToken?: ConfirmationToken;
  completionStatus = signal<{ address: boolean, delivery: boolean, paymentDetails: boolean }>({ address: false, delivery: false, paymentDetails: false });
  loading = false;


  async ngOnInit() {
    try {
      this.addressElement = await this.stripeService.createAddressElement();
      this.addressElement.mount("#address-element");
      this.addressElement.on("change", this.handleAddressChange);

      this.paymentElement = await this.stripeService.createPaymentElement();
      this.paymentElement.mount("#payment-element");
      this.paymentElement.on("change", this.handlePaymentChange)

    } catch (error: any) {
      this.snackbar.error(error.message)
    }
  }

  handleAddressChange = (event: StripeAddressElementChangeEvent) => {
    this.completionStatus.update(state => {
      state.address = event.complete;
      return state;
    })
  }

  handlePaymentChange = (event: StripePaymentElementChangeEvent) => {
    this.completionStatus.update(state => {
      state.paymentDetails = event.complete;
      return state;
    })
  }

  handleDeliveryChange(event: boolean) {
    this.completionStatus.update(state => {
      state.delivery = event;
      return state;
    })
  }

  async getConfirmationToken() {
    try {
      if (Object.values(this.completionStatus()).every(status => status === true)) {
        const result = await this.stripeService.createConfirmationToken();
        if (result.error) throw new Error(result.error.message);
        this.confirmationToken = result.confirmationToken;
        console.log(this.confirmationToken);
      }
    } catch (error: any) {
      this.snackbar.error(error.message);
    }
  }

  async confirmPayment(stepper: MatStepper) {
    this.loading = true;
  
    try {
      if (!this.confirmationToken) {
        throw new Error('No confirmation token available');
      }
  
      // Create the order first to check stock
      const order = await this.createOrderModel();
      const orderResult = await firstValueFrom(this.orderService.createOrder(order));
  
      if (!orderResult) {
        throw new Error('Order creation failed or out of stock');
      }
  
      // Proceed with payment after order creation
      const paymentResult = await this.stripeService.confirmPayment(this.confirmationToken);
  
      if (paymentResult.paymentIntent?.status === 'succeeded') {
        await this.handleOrderSuccess();
      } else if (paymentResult.error) {
        throw new Error(paymentResult.error.message);
      } else {
        throw new Error('Payment confirmation failed');
      }
    } catch (error: any) {
      console.log(error.error);
      this.handleError(error.error || error.message || 'Something went wrong', stepper);
    } finally {
      this.loading = false;
    }
  }
  
  private async handleOrderSuccess() {
    // Complete the order after successful payment
    this.orderService.orderComplete = true;
    this.cartService.deleteCart();
    this.cartService.selectedDelivery.set(null);
    this.router.navigateByUrl('/checkout/success');
  }
  
  private handleError(message: string, stepper: MatStepper) {
    this.snackbar.error(message);
    stepper.previous();
  }

  private async createOrderModel(): Promise<OrderToCreate> {
    const cart = this.cartService.cart();
    const shippingAddress = await this.getAddressFromStripeAddress() as ShippingAddress
    const card = this.confirmationToken?.payment_method_preview.card;

    if (!cart?.id || !cart.deliveryMethodId || !card || !shippingAddress) {
      throw new Error("Problem creating order");
    }

    const order: OrderToCreate = {
      cartId: cart.id,
      paymentSummary: {
        last4Digits: +card.last4,
        brand: card.brand,
        expMonth: card.exp_month,
        expYear: card.exp_year
      },
      deliveryMethodId: cart.deliveryMethodId,
      shippingAddress,
      discount: this.cartService.totals()?.discount
    }
    return order;
  }

  async onStepChange(event: StepperSelectionEvent) {
    if (event.selectedIndex === 1) {
      if (this.saveAddress) {
        const address = await this.getAddressFromStripeAddress();
        address && firstValueFrom(this.accountService.updateAddres(address));
      }
    }
    if (event.selectedIndex === 2) {
      await firstValueFrom(this.stripeService.createOrUpdatePaymentIntent())
    }
    if (event.selectedIndex === 3) {
      await this.getConfirmationToken();
    }
  }

  private async getAddressFromStripeAddress(): Promise<Address | ShippingAddress | null> {
    const results = await this.addressElement?.getValue();
    const address = results?.value.address;
    if (address) {
      return {
        name: results.value.name,
        line1: address.line1,
        line2: address.line2 || undefined,
        city: address.city,
        country: address.country,
        state: address.state,
        postalCode: address.postal_code
      }
    } else return null
  }

  onSaveAddressCheckboxChange(event: MatCheckboxChange) {
    this.saveAddress = event.checked;
  }

  ngOnDestroy(): void {
    this.stripeService.disposeElements();
  }
}
