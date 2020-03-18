using System;

namespace RenataApp.API.Dtos
{
    public class PhoneForUpdateDto
    {
        public DateTime Date { get; set; }
        public string SupplierName { get; set; }

        public string TypeName { get; set; }
        public string ModelName { get; set; }
        public string Imei { get; set; }
        public decimal Cost { get; set; }
        
    }


        
}