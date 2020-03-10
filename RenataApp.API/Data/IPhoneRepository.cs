using System.Collections.Generic;
using System.Threading.Tasks;
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
        Task<SaleType> GetSaleType(int id);
        Task<IEnumerable<SaleType>> GetSaleTypes();
        Task<PayType> GetPaymentType(int id);
        Task<IEnumerable<PayType>> GetPaymentTypes();
        Task<Store> GetStore(int id); 
        Task<IEnumerable<Store>> GetStores(); 
        Task<Phone> GetPhone(int id);
        Task<IEnumerable<Phone>> GetPhones();
        Task<Inventory> GetInventory(int id);
        Task<IEnumerable<Inventory>> GetInventories();
        Task<Sale> GetSale(int id);
        Task<IEnumerable<Sale>> GetSales();

      
    }
}