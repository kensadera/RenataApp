using System;

namespace RenataApp.API.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal Cost { get; set; }
        public DateTime DatePaid { get; set; }
        public bool IsPaid { get; set; }

         
    }
}