using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public SalesController(IPhoneRepository repo)
        {
            _repo = repo;

        }


        [HttpGet]

        public async Task<IActionResult> GetSales()
        {

            var sales = await _repo.GetSales();

            return Ok(sales);
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> GetSale(int id)
        {
            var sale = await _repo.GetSale(id);

            return Ok(sale);

        }


        [HttpPost]
        public async Task<IActionResult> CreateSale(Sale sale)
        {

            _repo.Add(sale);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Saving the sales detail failed");

        }
   

    }
}