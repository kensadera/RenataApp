using System;

namespace RenataApp.API.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime DateSold { get; set; }
        public decimal SalePrice { get; set; }
        public bool IsSold { get; set; }

        
        
    }
}