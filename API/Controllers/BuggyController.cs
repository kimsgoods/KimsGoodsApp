using System;
using System.Security.Claims;
using API.DTOs;
using Core.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }

    [HttpGet("not-found")]
    public IActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("bad-request")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("This is a Bad Request");
    }

    [HttpGet("internal-error")]
    public IActionResult GetInternalServerError()
    {
        throw new Exception("This is a text exception");
    }

    [HttpPost("validation-error")]
    public IActionResult GetValidationError(CreateProductDto product)
    {
        return Ok();
    }

    [Authorize]
    [HttpGet("secret")]
    public IActionResult GetSecret()
    {
        var name = User.FindFirst(ClaimTypes.Name)?.Value;  
        var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        return Ok("Hello " + name + " with the Id of " + id);
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("admin-secret")]
    public IActionResult GetAdminSecret()
    {
        var name = User.FindFirst(ClaimTypes.Name)?.Value;  
        var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var isAdmin = User.IsInRole("Admin");
        var roles = User.FindFirstValue(ClaimTypes.Role);

        return Ok(new 
        {
            name,
            id,
            isAdmin,
            roles
        });
    }
}
