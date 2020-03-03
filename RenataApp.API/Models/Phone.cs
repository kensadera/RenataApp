using System;

namespace RenataApp.API.Models
{
    public class Phone
    {
        public int Id { get; set; }
        public DateTime DateSupplied { get; set; }
        public decimal Cost { get; set; }

        public string Imei { get; set; }


        public Supplier Supplier { get; set; }
        public PhoneType PhoneType { get; set; }
       
 

        public User User { get; set; }
        public int UserId { get; set; }
    }
}