using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;

namespace RenataApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        public UsersController(IPhoneRepository repo)
        {
            _repo = repo;

        }

         [HttpGet]
        public async Task<IActionResult> GetUSers()
        {
            var users = await _repo.GetUsers();

            return Ok(users);   
        }

         [HttpGet("{id}")]
        public async Task<IActionResult> GetUSer(int id)
        {
            var user = await _repo.GetUser(id);
            
            return Ok(user);   
        }



    }
}