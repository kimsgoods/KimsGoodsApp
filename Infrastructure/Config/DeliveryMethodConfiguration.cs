using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Config
{
    class DeliveryMethodConfiguration : IEntityTypeConfiguration<DeliveryMethod>
    {
        public void Configure(EntityTypeBuilder<DeliveryMethod> builder)
        {
            builder.ToTable("DeliveryMethods");

            builder.HasKey(dm => dm.Id);
            builder.Property(dm => dm.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("int");

            builder.Property(dm => dm.ShortName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(dm => dm.DeliveryTime)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(dm => dm.Description)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(dm => dm.Price)
                .HasColumnType("decimal(18,2)");
        }
    }
}
