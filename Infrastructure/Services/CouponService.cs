using System;
using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace Infrastructure.Services;

public class CouponService(IConfiguration config) : ICouponService
{
    public async Task<AppCoupon?> GetCouponFromPromoCode(string code)
    {
        StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
        
        var promotionCodeService = new PromotionCodeService();
        var options = new PromotionCodeListOptions
        {
            Code = code
        };
        var promotionCodes = await promotionCodeService.ListAsync(options);
        var promotionCode = promotionCodes.FirstOrDefault();

        if(promotionCode != null && promotionCode.Coupon != null)
        {
            return new AppCoupon
            {
                Name = promotionCode.Coupon.Name,
                AmountOff = promotionCode.Coupon.AmountOff,
                PercentOff = promotionCode.Coupon.PercentOff,
                PromotionCode = promotionCode.Code,
                CouponId = promotionCode.Coupon.Id
            };
        }

        return null;
    }
}
