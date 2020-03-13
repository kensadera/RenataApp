using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Dtos;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoriesController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        private readonly IMapper _mapper;
        public InventoriesController(IPhoneRepository repo, IMapper mapper)
        {
            _mapper = mapper;
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


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePhone(int id, InventoryForUpdateDto inventoryForUpdateDto)
        {

            var inventoryFromRepo = await _repo.GetInventory(id);

            _mapper.Map(inventoryForUpdateDto, inventoryFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating phone details failed on save");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInventory(int id)
        {
                
            var inventory = await _repo.GetInventory(id);

             _repo.Delete(inventory);

            await _repo.SaveAll();
            return NoContent();

            throw new Exception($"Deleting inventory details failed");
        }



    }
}