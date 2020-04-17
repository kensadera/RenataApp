using System;

namespace RenataApp.API.Dtos
{
    public class SaleForListDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string SaleType { get; set; }
        public string TypeName { get; set; }
        public string ModelName { get; set; }
        public string Imei { get; set; }
        public string Order { get; set; }

        public decimal Price { get; set; }
        public bool IsPaid { get; set; }
        public  string User { get; set; }

        
    }


        
}