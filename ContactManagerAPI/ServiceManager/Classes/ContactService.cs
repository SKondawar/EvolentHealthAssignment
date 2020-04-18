using Common;
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

        public OperationResult<ContactInfo> Get(int id)
        {
            return _contactRepository.Get(id);
        }

        public OperationResult<IQueryable<ContactInfo>> GetAll()
        {
            return  _contactRepository.GetAll();
        }

        public async Task<OperationResult<bool>> Save(ContactInfo contact)
        {
            return await _contactRepository.Save(contact);
        }
    }
}
