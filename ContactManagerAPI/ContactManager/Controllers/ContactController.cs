using Models.Models;
using ServiceManager.Classes;
using ServiceManager.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ContactManaget.Controllers
{
    
    public class ContactController : ApiController
    {
        private readonly IContactService _contact;
        public ContactController(IContactService contact)
        {
            _contact = contact;
        }

        [HttpGet]
        public IQueryable<ContactInfo> GetAllContacts()
        {
            return _contact.GetAll();
        }
        [HttpPost]
        public bool Save(ContactInfo contact)
        {
            return _contact.Save(contact);
        }
    }
}
