
using Microsoft.EntityFrameworkCore;
using Renata.API.Models;
using RenataApp.API.Models;

namespace Renata.API.Data
{
    public class DataContext : DbContext
    {
    public DataContext(DbContextOptions<DataContext> options): base(options){}
						
		public DbSet <Value> Values{get; set;}
    public DbSet<User> Users { get; set; }

    }
}