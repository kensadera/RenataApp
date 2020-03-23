using System;

namespace RenataApp.API.Dtos
{
    public class SaleForUpdateDto
    {
        public DateTime Date { get; set; }
        public string SaleType { get; set; }
        public string TypeName { get; set; }
        public string ModelName { get; set; }
        public string Imei { get; set; }
        public string Order { get; set; }

        public decimal Cost { get; set; }
        public bool IsPaid { get; set; }

        
    }


        
}