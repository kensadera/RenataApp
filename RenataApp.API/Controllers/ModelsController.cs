using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModelsController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public ModelsController(IPhoneRepository repo)
        {
            _repo = repo;

        }

         [HttpGet("{id}")]
        public async Task<IActionResult> GetModel(int id)
        {
            var model = await _repo.GetPhoneModel(id);

            return Ok(model);   
        }

        [HttpGet]
        public async Task<IActionResult> GetModels()
        {
            var models = await _repo.GetPhoneModels();

            return Ok(models);
        }

        
        [HttpPost]
        public async Task<IActionResult> CreateModel(PhoneModel phoneModel)
        {

            _repo.Add(phoneModel);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Creating the phone model failed on save");

        }

    }
}