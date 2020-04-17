using System.Collections.Generic;
using System.Threading.Tasks;
using RenataApp.API.Helpers;
using RenataApp.API.Models;

namespace RenataApp.API.Data
{
    public interface IPhoneRepository
    {
        void Add<T>(T entity) where T: class;
        void Update<T>(T entity) where T: class;

        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        
        Task<Supplier> GetSupplier(int id);  
        Task<IEnumerable<Supplier>> GetSuppliers();
        Task<User> GetUser(int id);
        Task<IEnumerable<User>> GetUsers();
        Task<PhoneType> GetPhoneBrand(int id);
        Task<IEnumerable<PhoneType>> GetPhoneBrands();
        Task<PhoneModel> GetPhoneModel(int id);
        Task<IEnumerable<PhoneModel>> GetPhoneModels();
        Task<Phone> GetPhone(int id);
        Task<PagedList<Phone>> GetPhones(PhoneParams phoneParams);
        Task<Inventory> GetInventory(int id);
        Task<PagedList<Inventory>> GetInventories(InventoryParams inventoryParams);
        Task<Sale> GetSale(int id);
        Task<PagedList<Sale>> GetSales(SaleParams saleParams);
      
    }
}