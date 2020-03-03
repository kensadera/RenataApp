namespace RenataApp.API.Models
{
    public class PayType
    {
        public int Id { get; set; }
        public string PayName { get; set; }


        public  User User { get; set; } 
        public  int UserId { get; set; }
        
    }
}