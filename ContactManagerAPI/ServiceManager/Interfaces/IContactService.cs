using Common;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceManager.Interfaces
{
    public interface IContactService
    {
        OperationResult<IQueryable<ContactInfo>> GetAll();
        OperationResult<ContactInfo> Get(int id);
        Task<OperationResult<bool>> Save(ContactInfo contact);
    }
}
