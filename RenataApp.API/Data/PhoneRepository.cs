using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Renata.API.Data;
using RenataApp.API.Models;

namespace RenataApp.API.Data
{
    public class PhoneRepository : IPhoneRepository
    {
        private readonly DataContext _context;
        public PhoneRepository(DataContext context)
        {
            _context = context;

        }
        public  void Add<T>(T entity) where T : class
        {
             _context.Add(entity);
        }

        public  void Delete<T>(T entity) where T : class
        {
             _context.Remove(entity);
        }

        public async Task<Supplier> GetSupplier(int id)
        {
           var supplier = await _context.Suppliers.FirstOrDefaultAsync(s => s.Id == id);

            return supplier;
        }

        public async Task<IEnumerable<Supplier>> GetSuppliers()
        {
           
            var suppliers = await _context.Suppliers.ToListAsync();

            return suppliers;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
           var users = await _context.Users.ToListAsync();

           return users;
        }

        public async Task<bool> SaveAll()
        {
             return await _context.SaveChangesAsync()>0;
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
    }
}