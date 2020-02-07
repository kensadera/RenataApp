using System.Collections.Generic;

namespace RenataApp.API.Models
{
    public class User
    {
	public int Id {get;set;}
	public string Username {get;set;}
	public byte[] PasswordHash {get;set;}

    public byte[] PasswordSalt {get;set;}

    public  ICollection<Supplier> Suppliers { get; set; }
    public  ICollection<PhoneType> PhoneTypes { get; set; }
    public  ICollection<Sale> Sales	 { get; set; }
    public  ICollection<Payment> Payments	 { get; set; }
    public  ICollection<Inventory> Inventories	 { get; set; }
    public  ICollection<Phone> Phones	 { get; set; }
    public  ICollection<Storage> Storages	 { get; set; }
        
    }
}