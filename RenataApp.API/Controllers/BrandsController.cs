using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public BrandsController(IPhoneRepository repo)
        {
            _repo = repo;

        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetBrand(int id)
        {
            var brand = await _repo.GetPhoneBrand(id);

            return Ok(brand);   
        }

        [HttpGet]
        public async Task<IActionResult> GetBrands()
        {
            var brands = await _repo.GetPhoneBrands();

            return Ok(brands);
        }

        
        [HttpPost]
        public async Task<IActionResult> CreateBrand(PhoneType phoneType)
        {

            _repo.Add(phoneType);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Creating the phone brand failed on save");

        }

        

    }
}