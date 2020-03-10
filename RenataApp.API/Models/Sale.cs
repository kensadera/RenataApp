using System;

namespace RenataApp.API.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string SaleType { get; set; }
        public string PayType { get; set; }
        public string TypeName { get; set; }
        public string ModelName { get; set; }
        public string Imei { get; set; }

        public decimal Cost { get; set; }
        public bool IsPaid { get; set; }

        public  User User { get; set; }
        public  int UserId { get; set; } 
        
    }
}