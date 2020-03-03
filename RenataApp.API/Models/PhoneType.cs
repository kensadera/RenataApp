using System.Collections.Generic;

namespace RenataApp.API.Models
{
    public class PhoneType
    {
        public int Id { get; set; }
        public string TypeName { get; set; }

         

        public  User User { get; set; }        
        public  int UserId { get; set; }

         public  ICollection<PhoneModel> PhoneModels { get; set; }
    }
}