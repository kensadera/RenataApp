using System;

namespace RenataApp.API.Dtos
{
    public class InventoryForUpdateDto
    {
        public DateTime Date { get; set; }
        public string StoreName { get; set; }
        public string TypeName { get; set; }
        public string ModelName { get; set; }
        public string Imei { get; set; }
        public decimal Cost { get; set; }
         public bool InStock { get; set; }
        
    }


        
}