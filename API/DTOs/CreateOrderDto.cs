using System;
using System.ComponentModel.DataAnnotations;
using Core.Entities.OrderAggregates;

namespace API.DTOs;

public class CreateOrderDto
{
    [Required]
    public string CartId { get; set; } = string.Empty;
    [Required]
    public int DeliveryMethodId { get; set; }
    [Required]
    public PaymentSummary PaymentSummary { get; set; } = null!;
    [Required]
    public ShippingAddress ShippingAddress { get; set; } = null!;
    public decimal Discount { get; set; }

}
