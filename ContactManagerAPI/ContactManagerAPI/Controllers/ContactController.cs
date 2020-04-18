using Common;
using ContactManagerAPI.Helper;
using Models.Models;
using ServiceManager.Classes;
using ServiceManager.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ContactManager.Controllers
{
    
    public class ContactController : ApiController
    {
        private readonly IContactService _contact;
        public ContactController(IContactService contact)
        {
            _contact = contact;
        }

        [HttpGet]
        public ApiCustomResponse<OperationResult<IQueryable<ContactInfo>>> GetAllContacts()
        {             
            var  result =  _contact.GetAll();
            return new ApiCustomResponse<OperationResult<IQueryable<ContactInfo>>>(HttpStatusCode.OK,result);
        }
        [HttpPost]
        public async Task<ApiCustomResponse<OperationResult<bool>>> Save(ContactInfo contact)
        {
            var result =await _contact.Save(contact);
            return new ApiCustomResponse<OperationResult<bool>>(HttpStatusCode.OK, result);
        }
    }
}
