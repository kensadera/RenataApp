using System;

namespace RenataApp.API.Models
{
    public class Inventory
    {
        public int Id { get; set; }
        public DateTime  DateStocked { get; set; }
        public string Description { get; set; }
        public decimal Cost { get; set; }

        public int Imei { get; set; }
        public bool InStock { get; set; }

        public  User User { get; set; }
        public  int UserId { get; set; } 
    }
}