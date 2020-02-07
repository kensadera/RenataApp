using System;

namespace RenataApp.API.Models
{
    public class Phone
    {
        public int Id { get; set; }
        public DateTime DateSold { get; set; }
        public decimal Cost { get; set; }

        public int Imei { get; set; }

        public User User { get; set; }
        public int UserId { get; set; }
    }
}