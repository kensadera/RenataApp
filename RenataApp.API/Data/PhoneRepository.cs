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

        public async Task<PhoneModel> GetPhoneModel(int id)
        {
            var model = await _context.PhoneModels.FirstOrDefaultAsync(m => m.Id == id);

            return model;
        }

        public async Task<IEnumerable<PhoneModel>> GetPhoneModels()
        {
            var models = await _context.PhoneModels.ToListAsync();

            return models;
        }

        public async Task<PhoneType> GetPhoneBrand(int id)
        {
            var brand = await _context.PhoneTypes.FirstOrDefaultAsync(b => b.Id == id);

            return brand;
        }

        public async Task<IEnumerable<PhoneType>> GetPhoneBrands()
        {
            var brands = await _context.PhoneTypes.ToListAsync();

            return brands;
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

        public async Task<SaleType> GetSaleType(int id)
        {
            var saleType = await _context.SaleTypes.FirstOrDefaultAsync(s => s.Id == id);

            return saleType;
        }

        public async Task<IEnumerable<SaleType>> GetSaleTypes()
        {
            var saleTypes = await _context.SaleTypes.ToListAsync();

            return saleTypes;
        }

        public async Task<PayType> GetPaymentType(int id)
        {
            var paymentType = await _context.PayTypes.FirstOrDefaultAsync(p => p.Id == id);
             
             return paymentType;
        }

        public async Task<IEnumerable<PayType>> GetPaymentTypes()
        {
           var payTypes = await _context.PayTypes.ToListAsync();

           return payTypes;
        }

        public async Task<Store> GetStore(int id)
        {
            var store = await _context.Stores.FirstOrDefaultAsync( s => s.Id == id);

            return store;
        }

        public async Task<IEnumerable<Store>> GetStores()
        {
            var stores = await _context.Stores.ToListAsync();

            return stores;
        }

        public async Task<Phone> GetPhone(int id)
        {
        
            var phone = await _context.Phones.FirstOrDefaultAsync(p => p.Id == id);

            return phone;
        }

        public async Task<IEnumerable<Phone>> GetPhones()
        {
            var phones = await _context.Phones.ToListAsync();

            return phones;
        }
    }
}