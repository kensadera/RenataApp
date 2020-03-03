using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaletypesController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public SaletypesController(IPhoneRepository repo)
        {
            _repo = repo;

        }

        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSaleType(int id)
        {
            var saleType = await _repo.GetSaleType(id);

            return Ok(saleType);   
        }

        [HttpGet]
        public async Task<IActionResult> GetsaleTypes()
        {
            var saleTypes = await _repo.GetSaleTypes();

            return Ok(saleTypes);
        }

        
        [HttpPost]
        public async Task<IActionResult> CreateSaleType(SaleType saleType)
        {

            _repo.Add(saleType);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Creating the sale type failed on save");

        }

    }
}