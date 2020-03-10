using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoriesController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public InventoriesController(IPhoneRepository repo)
        {
            _repo = repo;

        }

        
        [HttpGet]

        public async Task<IActionResult> GetInventories()
        {

            var inventories = await _repo.GetInventories();

            return Ok(inventories);
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> GetInventory(int id)
        {
            var inventory = await _repo.GetInventory(id);

            return Ok(inventory);

        }


        [HttpPost]
        public async Task<IActionResult> CreateInventory(Inventory inventory)
        {

            _repo.Add(inventory);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Saving the shop details failed");

        }

    

    }
}