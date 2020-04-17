using DataManagerService.DataContext;
using DataManagerService.Interfaces;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataManagerService.Classes
{
    public class ContactRepository : IContactRepository
    {
        private readonly ContactInfoEntities _context;

        public ContactRepository(ContactInfoEntities context)
        {
            _context = context;
        }

        public ContactInfo Get(int id)
        {
            return _context.Contacts.Where(c => c.Id == id)
                .Select(c => new ContactInfo
                {
                    Id = c.Id
                })
                .FirstOrDefault();
        }

        public IQueryable<ContactInfo> GetAll()
        {
            var contacts = from c in _context.Contacts
                           where c.IsDeleted==false
                            select new ContactInfo()
                            {
                                Id = c.Id,
                                FirstName = c.FirstName,
                                LastName = c.LastName,
                                EmailId = c.EmailId,
                                PhoneNumber = c.PhoneNumber,
                                IsActive = c.IsActive == false?false:true
                            };
            return contacts;
            
        }

        public bool Save(ContactInfo contact)
        {
            if (contact!=null)
            {
                if (contact.Id == 0)
                {
                    // Insert new entry
                    return Insert(contact);
                }
                else if (contact.Id > 0 && !contact.IsDeleted)
                {
                    return Update(contact);
                }
                else if (contact.Id > 0 && contact.IsDeleted)
                {
                    return Delete(contact);
                }
            }
            return false;
        }
        private bool Insert(ContactInfo contact)
        {
            try
            {
                Contacts obj = new Contacts
                {
                    FirstName = contact.FirstName,
                    LastName = contact.LastName,
                    EmailId = contact.EmailId,
                    PhoneNumber = contact.PhoneNumber,
                    IsActive = contact.IsActive==false?false:true,
                    IsDeleted = contact.IsDeleted,
                    CreatedOn = DateTime.UtcNow,
                    CreatedBy = 1,
                    ModifiedOn = null,
                    ModifyBy = 0
                };
                _context.Contacts.Add(obj);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                throw;
            }
            
        }
        private bool Update(ContactInfo contact)
        {
            try
            {
                Contacts obj = _context.Contacts.Where(c => c.Id == contact.Id && c.IsDeleted==false).FirstOrDefault();
                if (obj !=null)
                {
                    obj.FirstName = contact.FirstName;
                    obj.LastName = contact.LastName;
                    obj.EmailId = contact.EmailId;
                    obj.PhoneNumber = contact.PhoneNumber;
                    obj.IsActive = contact.IsActive;
                    obj.IsDeleted = contact.IsDeleted;
                    obj.ModifiedOn = DateTime.UtcNow;
                    obj.ModifyBy = 1;
                    _context.SaveChanges();
                    return true;
                }

                return false;
                
            }
            catch (Exception)
            {

                throw;
            }

        }
        private bool Delete(ContactInfo contact)
        {
            try
            {
                Contacts obj = _context.Contacts.Where(c => c.Id == contact.Id).FirstOrDefault();
                if (obj != null)
                {                    
                    obj.IsDeleted = true;
                    obj.ModifiedOn = DateTime.UtcNow;
                    obj.ModifyBy = 1;
                    _context.SaveChanges();
                    return true;
                }

                return false;

            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
