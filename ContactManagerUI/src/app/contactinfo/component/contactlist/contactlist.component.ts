import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {

  contacts: ContactModel[];
  //displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId','phoneNumber','isActive'];
  constructor(private contactService:ContactService) {
    console.log('ContactlistComponent');
   }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(res=>{
        this.contacts = res;
        console.log(this.contacts);
    });
  }

  getContact(model:ContactModel)
  {
    console.log(model);
  }
}
