using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProductsController(IUnitOfWork unitOfWork) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts([FromQuery] ProductSpecParams specParams)
    {
        var spec = new ProductSpecification(specParams);

        var pagedResult = await CreatePagedResult(unitOfWork.Repository<Product>(), spec, specParams.PageIndex, specParams.PageSize);

        return pagedResult;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Product>> GetProductById(int id)
    {
        var product = await unitOfWork.Repository<Product>().GetByIdAsync(id);

        if (product == null) return NotFound();

        return product;
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<Product>> CreateProduct(Product product)
    {
        unitOfWork.Repository<Product>().Add(product);

        if (await unitOfWork.Complete())
        {
            return CreatedAtAction("GetProductById", new { id = product.Id }, product);
        }
        return BadRequest("Problem creating product");
    }

    [HttpPut("{id:int}")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> UpdateProduct(int id, Product product)
    {
        if (product.Id != id || !unitOfWork.Repository<Product>().Exists(id))
            return BadRequest("Cannot update this product");

        unitOfWork.Repository<Product>().Update(product);

        if (await unitOfWork.Complete())
        {
            return NoContent();
        }
        return BadRequest("Problem updating product");
    }

    [HttpDelete("{id:int}")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> DeleteProduct(int id)
    {
        var product = await unitOfWork.Repository<Product>().GetByIdAsync(id);

        if (product == null) return NotFound();

        unitOfWork.Repository<Product>().Remove(product);

        if (await unitOfWork.Complete())
        {
            return NoContent();
        }
        return BadRequest("Problem deleting product");
    }

    [HttpGet("brands")]
    public async Task<ActionResult<IReadOnlyList<string>>> GetBrands()
    {
        var spec = new BrandListSpecification();
        return Ok(await unitOfWork.Repository<Product>().ListAsync(spec));
    }

    [HttpGet("types")]
    public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
    {
        var spec = new TypeListSpecification();
        return Ok(await unitOfWork.Repository<Product>().ListAsync(spec));
    }
}
