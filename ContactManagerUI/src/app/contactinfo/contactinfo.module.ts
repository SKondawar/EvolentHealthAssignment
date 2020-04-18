import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactinfoRoutingModule } from './contactinfo-routing.module';
import { ContactinfoComponent } from './contactinfo.component';
import { SavecontactComponent } from './component/savecontact/savecontact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContactdetailsComponent } from './component/contactdetails/contactdetails.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [ContactinfoComponent, SavecontactComponent, ContactdetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ContactinfoRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  exports:[MatCardModule,MatIconModule,MatTableModule],
  providers:[ContactService]
})
export class ContactinfoModule { }
