using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RenataApp.API.Data;
using RenataApp.API.Dtos;
using RenataApp.API.Helpers;
using RenataApp.API.Models;

namespace RenataApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly IPhoneRepository _repo;
        private readonly IMapper _mapper;
        public SalesController(IPhoneRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }


        [HttpGet]

        public async Task<IActionResult> GetSales([FromQuery]SaleParams saleParams)
        {

            var sales = await _repo.GetSales(saleParams);

            var salesToReturn = _mapper.Map<IEnumerable<SaleForListDto>>(sales);

             Response.AddPagination(sales.CurrentPage, sales.PageSize,
                sales.TotalCount, sales.TotalPages);

            return Ok(salesToReturn);
        }
        
        [HttpGet("{id}")]

        public async Task<IActionResult> GetSale(int id)
        {
            var sale = await _repo.GetSale(id);

            return Ok(sale);

        }


        [HttpPost]
        public async Task<IActionResult> CreateSale(Sale sale)
        {

            _repo.Add(sale);

            await _repo.SaveAll();

            return NoContent();

            throw new Exception("Saving the sales detail failed");

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSale(int id, SaleForUpdateDto saleForUpdateDto)
        {

            var saleFromRepo = await _repo.GetSale(id);

            _mapper.Map(saleForUpdateDto, saleFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating sale details failed on save");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSale(int id)
        {

            var sale = await _repo.GetSale(id);

            _repo.Delete(sale);

            await _repo.SaveAll();
            return NoContent();

            throw new Exception($"Deleting sale details failed");
        }



    }
}