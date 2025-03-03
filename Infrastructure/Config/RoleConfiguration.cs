using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Config;

public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
{
    public void Configure(EntityTypeBuilder<IdentityRole> builder)
    {
        builder.HasData
        (
            new IdentityRole { Id = new Guid("44bb97a9-8bc7-42ad-bca1-5e64d603468b").ToString(), Name = "Admin", NormalizedName = "ADMIN" },
            new IdentityRole { Id = new Guid("0d2448dd-7428-43b0-8902-3f4cfb7f9828").ToString(), Name = "Customer", NormalizedName = "CUSTOMER" }
        );
    }
}
