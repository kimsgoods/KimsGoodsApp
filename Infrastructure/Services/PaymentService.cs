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
            var deliveryFee = 0m;

            if (cart.DeliveryMethodId.HasValue)
            {
                var deliveryMethod = await unitOfWork.Repository<DeliveryMethod>().GetByIdAsync((int)cart.DeliveryMethodId);
                if (deliveryMethod == null) return null;
                deliveryFee = deliveryMethod.Price;
            }
            foreach (var item in cart.Items)
            {
                var productItem = await unitOfWork.Repository<Product>().GetByIdAsync(item.ProductId);
                if (productItem == null) return null;
                if (item.Price != productItem.Price)
                {
                    item.Price = productItem.Price;
                }
            }

            var paymentIntentService = new PaymentIntentService();
            PaymentIntent? intent = null;

            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = (long)cart.Items.Sum(x => x.Quantity * (x.Price * 100)) + (long)deliveryFee * 100,
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
                    Amount = (long)cart.Items.Sum(x => x.Quantity * (x.Price * 100)) + (long)deliveryFee * 100
                };
                intent = await paymentIntentService.UpdateAsync(cart.PaymentIntentId, options);
            }

            await cartService.SetCartAsync(cart);

            return cart;
        }
    }
}
