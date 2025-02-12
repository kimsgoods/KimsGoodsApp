import { inject, Injectable } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { forkJoin, of } from 'rxjs';
import { AccountService } from '../core/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  private cartService = inject(CartService);
  private accountService = inject(AccountService);

  init() {
    const cartId = localStorage.getItem("cart_id");
    const cart$ = cartId ? this.cartService.getCart(cartId) : of(null);


    return forkJoin({
      cart: cart$,
      user: this.accountService.getUserInfo()
    })
  }
}
