﻿using ContactManaget.Filters;
using System.Web;
using System.Web.Mvc;

namespace ContactManaget
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
