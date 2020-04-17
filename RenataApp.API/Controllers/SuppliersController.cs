using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{

   
    [Route("api/[controller]")]
    [ApiController]
    public class SuppliersController : ControllerBase
    {
        private readonly IPhoneRepository _repo;

        public SuppliersController(IPhoneRepository repo)
        {
        
            _repo = repo;

        }


        [HttpGet]

        public async Task<IActionResult> GetSuppliers()
        {

            var suppliers = await _repo.GetSuppliers();

            return Ok(suppliers);
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> GetSupplier(int id)
        {
            var supplier = await _repo.GetSupplier(id);

            return Ok(supplier);

        }


        [HttpPost]
        public async Task<IActionResult> CreateSupplier(Supplier supplier)
        {

            _repo.Add(supplier);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Creating the supplier failed on save");

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSupplier(int id)
        {

            var supplier = await _repo.GetSupplier(id);

            _repo.Delete(supplier);

            await _repo.SaveAll();
            return NoContent();

            throw new Exception($"Deleting supplier failed");
        }


    }
}