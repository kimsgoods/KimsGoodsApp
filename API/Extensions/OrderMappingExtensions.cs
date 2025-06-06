﻿using API.DTOs;
using Core.Entities.OrderAggregates;
using System.ComponentModel;
using System.Reflection;

namespace API.Extensions;

public static class OrderMappingExtensions
{
    public static OrderDto ToDto(this Order order)
    {
        return new OrderDto
        {
            Id = order.Id,
            BuyerEmail = order.BuyerEmail,
            OrderDate = order.OrderDate,
            ShippingAddress = order.ShippingAddress,
            PaymentSummary = order.PaymentSummary,
            DeliveryMethod = order.DeliveryMethod.Description,
            ShippingPrice = order.DeliveryMethod.Price,
            OrderItems = order.OrderItems.Select(x => x.ToDto()).ToList(),
            Subtotal = order.Subtotal,
            Discount = order.Discount,
            Total = order.GetTotal(),
            Status = GetEnumDescription(order.Status),
            PaymentIntentId = order.PaymentIntentId
        };
    }

    public static OrderItemDto ToDto(this OrderItem orderItem)
    {
        return new OrderItemDto
        {
            ProductId = orderItem.ItemOrdered.ProductId,
            ProductName = orderItem.ItemOrdered.ProductName,
            PictureUrl = orderItem.ItemOrdered.PictureUrl,
            Price = orderItem.Price,
            Quantity = orderItem.Quantity
        };
    }

    public static string GetEnumDescription(Enum value)
    {
        if (value == null)
            throw new ArgumentNullException(nameof(value));

        FieldInfo? field = value.GetType().GetField(value.ToString());
        if (field == null)
            return value.ToString(); // Fallback to the enum name

        DescriptionAttribute? attribute = field.GetCustomAttribute<DescriptionAttribute>();
        return attribute?.Description ?? value.ToString();
    }
}