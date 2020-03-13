using System;
using System.Collections.Generic;
using System.Security.Claims;
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
    public class PhonesController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        private readonly IMapper _mapper;
        public PhonesController(IPhoneRepository repo, IMapper mapper)
        {
           
            _repo = repo;
            _mapper = mapper;


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


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePhone( int id, PhoneForUpdateDto phoneForUpdateDto)
        {

            var phoneFromRepo = await _repo.GetPhone(id);

            _mapper.Map(phoneForUpdateDto, phoneFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating phone details failed on save");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhone(int id)
        {
                
            var phone = await _repo.GetPhone(id);

             _repo.Delete(phone);

            await _repo.SaveAll();
            return NoContent();

            throw new Exception($"Deleting phone details failed");
        }



    }
}