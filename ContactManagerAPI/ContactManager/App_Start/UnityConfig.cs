using DataManagerService.Classes;
using DataManagerService.DataContext;
using DataManagerService.Interfaces;
using ServiceManager.Classes;
using ServiceManager.Interfaces;
using System.Web.Http;
using Unity;
using Unity.Lifetime;
using Unity.WebApi;

namespace ContactManaget
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IContactRepository, ContactRepository>(new HierarchicalLifetimeManager());
            container.RegisterType<IContactService, ContactService>(new HierarchicalLifetimeManager());

            container.RegisterType<ContactInfoEntities>(new PerResolveLifetimeManager());
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}