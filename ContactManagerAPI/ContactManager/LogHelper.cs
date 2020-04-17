using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http.Controllers;

namespace ContactManaget
{
    public class LogHelper
    {
        public static string ErrorMessage(HttpActionContext actionContext, Exception exception = null)
        {
            var message = new StringBuilder();
            if (actionContext != null)
            {
                
                if (actionContext.Request == null) return Convert.ToString(message);

                if (actionContext.Request.Method != null)
                    message.Append("Method: " + actionContext.Request.Method + Environment.NewLine);

                if (actionContext.Request.RequestUri != null)
                    message.Append("").Append("URL: " + actionContext.Request.RequestUri + Environment.NewLine);

                if (actionContext.ControllerContext?.ControllerDescriptor != null &&
                    actionContext.ControllerContext.ControllerDescriptor.ControllerType != null)
                    message.Append("").Append("Controller : " +
                                              actionContext.ControllerContext.ControllerDescriptor.ControllerType
                                                  .FullName + Environment.NewLine);

                if (actionContext.ActionDescriptor != null)
                {
                    message.Append("")
                        .Append("Action : " + actionContext.ActionDescriptor.ActionName + Environment.NewLine);
                }
            }

            if (!string.IsNullOrWhiteSpace(exception?.GetBaseException().Message))
            {
                message.Append("").Append("ErrorMessage : " + exception.GetBaseException().Message + Environment.NewLine);
                message.Append("").Append("StackTrace : " + exception.StackTrace + Environment.NewLine);
            }
            return Convert.ToString(message);
        }
    }
}