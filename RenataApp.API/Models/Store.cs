namespace RenataApp.API.Models
{
    public class Store
    {
        
        public int Id { get; set; }
        public string StoreName { get; set; }

        public  User User { get; set; }
        public  int UserId { get; set; } 

        
    }
}