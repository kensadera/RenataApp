using System;

namespace RenataApp.API.Models
{
    public class Phone
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string SupplierName { get; set; }
        public string TypeName { get; set; }
        public string ModelName { get; set; }
        public decimal Cost { get; set; }

        public string Imei { get; set; }
       
 

        public  string User { get; set; }
       
        public int UserId { get; set; }

      
       
    }
}