using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProductsController(IGenericRepository<Product> repo) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts([FromQuery] ProductSpecParams specParams)
    {
        var spec = new ProductSpecification(specParams);

        var pagedResult = await CreatePagedResult(repo, spec, specParams.PageIndex, specParams.PageSize);

        return pagedResult;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Product>> GetProductById(int id)
    {
        var product = await repo.GetByIdAsync(id);

        if (product == null) return NotFound();

        return product;
    }

    // [HttpPost]
    // public async Task<ActionResult<Product>> CreateProduct(Product product)
    // {
    //     repo.AddProduct(product);

    //     if (await repo.SaveChangesAsync())
    //     {
    //         return CreatedAtAction("GetProductById", new { id = product.Id }, product);
    //     }
    //     return BadRequest("Problem creating product");
    // }

    // [HttpPut("{id:int}")]
    // public async Task<ActionResult> UpdateProduct(int id, Product product)
    // {
    //     if (product.Id != id || !repo.ProductExists(id))
    //         return BadRequest("Cannot update this product");

    //     repo.UpdateProduct(product);

    //     if (await repo.SaveChangesAsync())
    //     {
    //         return NoContent();
    //     }
    //     return BadRequest("Problem updating product");
    // }

    // [HttpDelete("{id:int}")]
    // public async Task<ActionResult> DeleteProduct(int id)
    // {
    //     var product = await repo.GetProductByIdAsync(id);

    //     if (product == null) return NotFound();

    //     repo.DeleteProduct(product);

    //     if (await repo.SaveChangesAsync())
    //     {
    //         return NoContent();
    //     }
    //     return BadRequest("Problem deleting product");
    // }

    [HttpGet("brands")]
    public async Task<ActionResult<IReadOnlyList<string>>> GetBrands()
    {
        var spec = new BrandListSpecification();
        return Ok(await repo.ListAsync(spec));
    }

    [HttpGet("types")]
    public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
    {
        var spec = new TypeListSpecification();
        return Ok(await repo.ListAsync(spec));
    }
}
