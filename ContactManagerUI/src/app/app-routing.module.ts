import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'login',redirectTo:'',pathMatch:'full'},
 {path:'welcome',component:WelcomeComponent,canActivate:[AuthGuard]},
 //{path:'home',component:HomeComponent},
 {path:'contactinfo',loadChildren:()=> import('./contactinfo/contactinfo.module').then(m=>m.ContactinfoModule),canActivate:[AuthGuard] },
 {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
