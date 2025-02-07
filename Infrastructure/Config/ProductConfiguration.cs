using System;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Config;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.ToTable("Products");

        builder.HasKey(p => p.Id);
        builder.Property(p => p.Id)
            .ValueGeneratedOnAdd()
            .HasColumnType("int");

        builder.Property(p => p.Name)
            .HasColumnType("nvarchar(255)")
            .IsRequired();

        builder.Property(p => p.Description)
            .HasColumnType("nvarchar(max)");

        builder.Property(p => p.Price)
            .HasColumnType("decimal(18,2)")
            .IsRequired();

        builder.Property(p => p.PictureUrl)
            .HasColumnType("nvarchar(max)")
            .IsRequired();

        builder.Property(p => p.Type)
            .HasColumnType("nvarchar(255)")
            .IsRequired();

        builder.Property(p => p.Brand)
            .HasColumnType("nvarchar(255)")
            .IsRequired();

        builder.Property(p => p.QuantityInStock)
            .HasColumnType("int")
            .IsRequired();

        // Indexes for fast searching
        builder.HasIndex(p => p.Name);
        builder.HasIndex(p => p.Brand);
        builder.HasIndex(p => p.Type);
    }
}
