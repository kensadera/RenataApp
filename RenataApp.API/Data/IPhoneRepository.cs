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
        Task<IEnumerable<Supplier>> GetSuppliers();
        Task<Supplier> GetSupplier(int id);  
        Task<User> GetUser(int id);
        Task<IEnumerable<User>> GetUsers();
    }
}