import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactinfoComponent } from './contactinfo.component';
import { ContactdetailsComponent } from './component/contactdetails/contactdetails.component';
import { SavecontactComponent } from './component/savecontact/savecontact.component';
import { AuthGuard } from '../auth/services/auth.guard';


const routes : Routes = [
  // { path:'',component:ContactinfoComponent },
  // { path:'list',component:ContactlistComponent },
  // { path:'save',component:SavecontactComponent },
  // { path:'details',component:ContactdetailsComponent },

  { path:'',component:ContactinfoComponent, 
  canActivate:[AuthGuard]},
  { path:'save/:id',component:SavecontactComponent },
  { path:'details/:id',component:ContactdetailsComponent },
  { path:'**',redirectTo:''}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ContactinfoRoutingModule { }
