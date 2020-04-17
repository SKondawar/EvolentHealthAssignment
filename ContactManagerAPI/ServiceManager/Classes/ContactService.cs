using DataManagerService.Interfaces;
using Models.Models;
using ServiceManager.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceManager.Classes
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;
        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }
        public ContactInfo Get(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<ContactInfo> GetAll()
        {
            return _contactRepository.GetAll();
        }

        public bool Save(ContactInfo contact)
        {
            return _contactRepository.Save(contact);
        }
    }
}
