using AutoMapper;
using RenataApp.API.Dtos;
using RenataApp.API.Models;

namespace RenataApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {

            CreateMap<Phone, PhoneForListDto>();
            CreateMap<Inventory, InventoryForListDto>();
            CreateMap<Sale, SaleForListDto>();
         
        
          
            CreateMap<PhoneForUpdateDto, Phone>();
            CreateMap<InventoryForUpdateDto,Inventory>();
            CreateMap<SaleForUpdateDto,Sale>();
            
            
        }
        
    }
}