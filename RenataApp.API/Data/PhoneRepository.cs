using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Renata.API.Data;
using RenataApp.API.Helpers;
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

    

        public async Task<Phone> GetPhone(int id)
        {
        
            var phone = await _context.Phones.FirstOrDefaultAsync(p => p.Id == id);

            return phone;
        }

        public async Task<PagedList<Phone>> GetPhones(PhoneParams phoneParams)
        {
            var phones =  _context.Phones.OrderByDescending(p => p.Id).AsQueryable();

         //   phones = phones.Where(s => s.SupplierName == phoneParams.SupplierName);
         

            return await PagedList<Phone>.CreateAsync(phones, phoneParams.PageNumber, phoneParams.PageSize);
        }


        public async Task<Inventory> GetInventory(int id)
        {
            var inventory = await _context.Inventories.FirstOrDefaultAsync(i => i.Id == id);

            return inventory;
        }
        

        public async Task<PagedList<Inventory>> GetInventories(InventoryParams inventoryParams)
        {
            var inventories =  _context.Inventories.OrderByDescending(p => p.Id).AsQueryable();

            return await PagedList<Inventory>.CreateAsync(inventories, inventoryParams.PageNumber, inventoryParams.PageSize);
        }
 

        public async Task<Sale> GetSale(int id)
        {
            var sale = await _context.Sales.FirstOrDefaultAsync(s => s.Id == id);

            return sale;
        }

     
        public async Task<IEnumerable<Sale>> GetSales()
        {
           var sales = await _context.Sales.ToListAsync();

           return sales;
        }

        

        public async Task<PagedList<Sale>> GetSales(SaleParams saleParams)
        {
            var sales =  _context.Sales.OrderByDescending(p => p.Id).AsQueryable();

            return await PagedList<Sale>.CreateAsync(sales, saleParams.PageNumber, saleParams.PageSize);
        }
    }
}