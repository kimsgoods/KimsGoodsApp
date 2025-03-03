using System.ComponentModel;

namespace Core.Entities.OrderAggregates;

public enum OrderStatus
{
    [Description("Pending")]
    Pending,

    [Description("Payment Received")]
    PaymentReceived,

    [Description("Payment Failed")]
    PaymentFailed,

    [Description("Payment Mismatch")]
    PaymentMismatch,

    [Description("Refunded")]
    Refunded
}

