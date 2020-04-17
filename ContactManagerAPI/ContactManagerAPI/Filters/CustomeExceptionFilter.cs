using ContactManagerAPI.Helper;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Filters;

namespace ContactManager.Filters
{
    public class CustomeExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            var logger = LogManager.GetCurrentClassLogger();
            string exceptionMessage = string.Empty;
            if (actionExecutedContext.Exception.InnerException == null)
            {
                exceptionMessage = actionExecutedContext.Exception.Message;
            }
            else
            {
                exceptionMessage = actionExecutedContext.Exception.InnerException.Message;
            }
            logger.Error(LogHelper.ErrorMessage(actionExecutedContext.ActionContext, actionExecutedContext.Exception));
            actionExecutedContext.Response = new HttpResponseMessage()
            {
                Content = new StringContent("An error ocurred while performing action", System.Text.Encoding.UTF8, "text/plain"),
                StatusCode = HttpStatusCode.InternalServerError
            };
            base.OnException(actionExecutedContext);
        }
    }
}