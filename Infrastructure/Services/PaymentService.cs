using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe;
using Product = Core.Entities.Product;

namespace Infrastructure.Services
{
    public class PaymentService(IConfiguration configuration, ICartService cartService, IUnitOfWork unitOfWork) : IPaymentService
    {
        public async Task<ShoppingCart?> CreateOrUpdatePaymentIntent(string cartId)
        {
            StripeConfiguration.ApiKey = configuration["StripeSettings:SecretKey"];
            var cart = await cartService.GetCartAsync(cartId);
            if (cart == null) return null;

            var deliveryFee = await GetDeliveryFee(cart);
            var subtotal = GetSubtotal(cart);

            if (cart.Coupon != null)
            {
                subtotal = await ApplyDiscount(cart.Coupon, subtotal);
            }

            var totalAmount = subtotal + deliveryFee;
            await ValidateCartItemsPrice(cart);

            var paymentIntentService = new PaymentIntentService();
            PaymentIntent? intent = null;

            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = (long)totalAmount,
                    Currency = "usd",
                    PaymentMethodTypes = ["card"]
                };
                intent = await paymentIntentService.CreateAsync(options);
                cart.PaymentIntentId = intent.Id;
                cart.ClientSecret = intent.ClientSecret;
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = (long)totalAmount
                };
                intent = await paymentIntentService.UpdateAsync(cart.PaymentIntentId, options);
            }

            await cartService.SetCartAsync(cart);

            return cart;
        }

        private static async Task<long> ApplyDiscount(AppCoupon appCoupon, long subtotal)
        {
            var couponService = new Stripe.CouponService();

            var coupon = await couponService.GetAsync(appCoupon.CouponId);

            if (coupon.AmountOff.HasValue)
            {
                subtotal -= (long)coupon.AmountOff * 100;
            }

            if (coupon.PercentOff.HasValue)
            {
                var discount = subtotal * (coupon.PercentOff.Value / 100);
                subtotal -= (long)discount;
            }

            return subtotal;
        }

        private async Task ValidateCartItemsPrice(ShoppingCart cart)
        {
            foreach (var item in cart.Items) //Make sure the cart item price matches the price on the products table
            {
                var productItem = await unitOfWork.Repository<Product>().GetByIdAsync(item.ProductId) ?? throw new Exception("Problem with product item");
                if (item.Price != productItem.Price)
                {
                    item.Price = productItem.Price;
                }
            }
        }

        private static long GetSubtotal(ShoppingCart cart)
        {
            var subtotal = cart.Items.Sum(x => x.Quantity * x.Price * 100); // multiply 100 to match Stripe long Amount
            return (long)subtotal;
        }

        private async Task<long> GetDeliveryFee(ShoppingCart cart)
        {
            long deliveryFee = 0;
            if (cart.DeliveryMethodId.HasValue)
            {
                var deliveryMethod = await unitOfWork.Repository<DeliveryMethod>().GetByIdAsync((int)cart.DeliveryMethodId)
                    ?? throw new Exception("Problem with delivery method");
                deliveryFee = (long)deliveryMethod.Price * 100; // multiply 100 to match Stripe long Amount
            }
            else
            {
                throw new Exception("Problem with delivery method");
            }
            return deliveryFee;
        }
    }
}
