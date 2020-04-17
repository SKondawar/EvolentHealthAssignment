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
        IQueryable<ContactInfo> GetAll();
        ContactInfo Get(int id);

        bool Save(ContactInfo contact);
    }
}
