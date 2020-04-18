using Common;
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

        public OperationResult<ContactInfo> Get(int id)
        {
            ContactInfo contact = _context.Contacts.Where(c => c.Id == id)
                .Select(c => new ContactInfo
                {
                    Id = c.Id
                })
                .FirstOrDefault();
            var operationResult = new OperationResult<ContactInfo>(contact,"sucess");
            return operationResult;
        }

        public OperationResult<IQueryable<ContactInfo>> GetAll()
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
            var operationResult = new OperationResult<IQueryable<ContactInfo>>(contacts, "sucess");
            return operationResult;

        }

        public async Task<OperationResult<bool>> Save(ContactInfo contact)
        {
            
            if (contact!=null)
            {
               
                if (contact.Id == 0)
                {
                    // Insert new entry
                    return await Insert(contact);
                }
                else if (contact.Id > 0 && !contact.IsDeleted)
                {
                    return  await Update(contact);
                }
                else if (contact.Id > 0 && contact.IsDeleted)
                {
                    return await Delete(contact);
                }                
                return null;
            }
            return new OperationResult<bool>(false, "contact object is null");            
        }

        #region Private Methods
       
        private async Task<OperationResult<bool>> Insert(ContactInfo contact)
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
                await _context.SaveChangesAsync();
                 var operationResult = new OperationResult<bool>(true, "inserted successfully");
                return operationResult;
            }
            catch (Exception)
            {

                throw;
            }
            
        }
        private async Task<OperationResult<bool>> Update(ContactInfo contact)
        {
            try
            {
                bool result = false;
                string strMessage = string.Empty;
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
                    await _context.SaveChangesAsync();
                    result = true;
                    strMessage = "updated successfully";
                }
                else
                {
                    result = false;
                    strMessage = "not found";
                }
                var operationResult = new OperationResult<bool>(result, strMessage);
                return operationResult;
            }
            catch (Exception)
            {

                throw;
            }

        }
        private async Task<OperationResult<bool>> Delete(ContactInfo contact)
        {
            try
            {
                bool result = false;
                string strMessage = string.Empty;
                Contacts obj = _context.Contacts.Where(c => c.Id == contact.Id).FirstOrDefault();
                if (obj != null)
                {
                    if ((bool)obj.IsDeleted)
                    {
                        result = false;
                        strMessage = "alredy deleted";
                    }
                    else
                    {
                        obj.IsDeleted = true;
                        obj.ModifiedOn = DateTime.UtcNow;
                        obj.ModifyBy = 1;
                        await _context.SaveChangesAsync();
                        result = true;
                        strMessage = "deleted successfully";

                    }
                }
                else
                {
                    result = false;
                    strMessage = "not found";
                }

                return new OperationResult<bool>(result,strMessage);

            }
            catch (Exception)
            {

                throw;
            }

        }

        #endregion

    }
}
