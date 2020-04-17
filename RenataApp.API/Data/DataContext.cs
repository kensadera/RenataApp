
using Microsoft.EntityFrameworkCore;

using RenataApp.API.Models;

namespace Renata.API.Data
{
    public class DataContext : DbContext
    {
    public DataContext(DbContextOptions<DataContext> options): base(options){}
    public DbSet<User> Users { get; set; }
    public DbSet<Supplier> Suppliers { get; set; }
    public DbSet<Sale> Sales { get; set; }
    public DbSet<Inventory> Inventories { get; set; }
    public DbSet<Payment> Payments { get; set; }
    public DbSet<PhoneModel> PhoneModels { get; set; }
    public DbSet<PhoneType> PhoneTypes { get; set; }
    public DbSet<Phone> Phones { get; set; }

   
    

    }
}