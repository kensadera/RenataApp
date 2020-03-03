using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoresController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public StoresController(IPhoneRepository repo)
        {
            _repo = repo;

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStore(int id)
        {
            var store = await _repo.GetStore(id);

            return Ok(store);   
        }

        [HttpGet]
        public async Task<IActionResult> GetStores()
        {
            var stores = await _repo.GetStores();

            return Ok(stores);
        }

        [HttpPost]
        public async Task<IActionResult> CreateStore(Store store)
        {

            _repo.Add(store);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Creating the store name failed on save");

        }




    }
}