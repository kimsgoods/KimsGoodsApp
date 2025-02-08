using System;
using API.DTOs;
using Core.Entities;
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
}
