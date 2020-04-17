using System;
using RenataApp.API.Models;

namespace RenataApp.API.Dtos
{
    public class InventoryForListDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string StoreName { get; set; }
        public string TypeName { get; set; }
        public string ModelName { get; set; }
        public string Imei { get; set; }
        public decimal Cost { get; set; }
        public bool InStock { get; set; }
        public  string User { get; set; }
        
        
    }


        
}