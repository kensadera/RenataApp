using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhonesController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public PhonesController(IPhoneRepository repo)
        {
            _repo = repo;


        }

         [HttpGet]

        public async Task<IActionResult> GetPhones()
        {

            var phones = await _repo.GetPhones();

            return Ok(phones);
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> GetPhone(int id)
        {
            var phone = await _repo.GetPhone(id);

            return Ok(phone);

        }


        [HttpPost]
        public async Task<IActionResult> CreatePhone(Phone phone)
        {

            _repo.Add(phone);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Saving the phone details failed");

        }


    }
}