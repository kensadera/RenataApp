namespace RenataApp.API.Models
{
    public class SaleType
    {
        public int Id { get; set; }
        public string SaleName { get; set; }

        public  User User { get; set; }    
        public  int UserId { get; set; }
        
    }
}