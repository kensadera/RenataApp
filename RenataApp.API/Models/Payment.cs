using System;

namespace RenataApp.API.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public string PaymentType { get; set; }
        public decimal Cost { get; set; }
        public DateTime DatePaid { get; set; }
        public bool IsPaid { get; set; }

        public  User User { get; set; } 
        public  int UserId { get; set; }  
    }
}