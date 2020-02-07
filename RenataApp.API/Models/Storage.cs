namespace RenataApp.API.Models
{
    public class Storage
    {
        
        public int Id { get; set; }
        public string StoreName { get; set; }

        public  User User { get; set; }
        public  int UserId { get; set; } 

        
    }
}