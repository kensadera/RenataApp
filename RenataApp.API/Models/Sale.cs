using System;

namespace RenataApp.API.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public string SaleType { get; set; }
        public DateTime DateSold { get; set; }
        public decimal SalePrice { get; set; }
        public bool IsSold { get; set; }

        public  User User { get; set; }    
        public  int UserId { get; set; } 
        
    }
}