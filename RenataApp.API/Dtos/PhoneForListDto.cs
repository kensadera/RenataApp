using System;

namespace RenataApp.API.Dtos
{
    public class PhoneForListDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string SupplierName { get; set; }

        public string TypeName { get; set; }
        public string ModelName { get; set; }
        public string Imei { get; set; }
        public decimal Cost { get; set; }
        public  string User { get; set; }
      
    }


        
}