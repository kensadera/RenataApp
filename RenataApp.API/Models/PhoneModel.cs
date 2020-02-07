namespace RenataApp.API.Models
{
    public class PhoneModel
    {
        public int Id { get; set; }
        public string ModelName { get; set; }
      

        public  PhoneType PhoneType { get; set; }
        public  int PhoneTypeId { get; set; } 
    }
}