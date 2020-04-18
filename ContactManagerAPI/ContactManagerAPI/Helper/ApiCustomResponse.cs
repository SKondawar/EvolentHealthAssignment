using Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace ContactManagerAPI.Helper
{
    public class ApiCustomResponse<T>
    {
        public HttpStatusCode StatusCode { get; set; }
        public T Result { get; set; }
        public ApiCustomResponse(HttpStatusCode statusCode, T result=default(T))
        {
            this.StatusCode = statusCode;
            this.Result = result;
        }
  
    }
}