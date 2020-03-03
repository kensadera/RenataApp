using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PaytypesController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public PaytypesController(IPhoneRepository repo)
        {
            _repo = repo;

        }

         [HttpGet("{id}")]
        public async Task<IActionResult> GetPaymentType(int id)
        {
            var paymentType = await _repo.GetPaymentType(id);

            return Ok(paymentType);   
        }

        [HttpGet]
        public async Task<IActionResult> GetPaymentTypes()
        {
            var paymentTypes= await _repo.GetPaymentTypes();

            return Ok(paymentTypes);
        }

        
        [HttpPost]
        public async Task<IActionResult> CreateBrand(PayType paymentType)
        {

            _repo.Add(paymentType);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Creating the payment type failed on save");

        }

    }
}