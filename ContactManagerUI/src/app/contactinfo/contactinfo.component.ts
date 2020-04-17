import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from './services/contact.service';
import { ContactModel } from './models/contact.model';
import { NotificationService } from '../shared/services/notification.service';
import { AppMessages } from '../constants/app.messages';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.scss']
})
export class ContactinfoComponent implements OnInit {

  contacts:ContactModel[];
  constructor(private router:Router,private contactService:ContactService,private notificationService:NotificationService) { 
    console.log('ContactinfoComponent');
  }

  ngOnInit(): void {
      this.getAllContacts();
  }
  getAllContacts()
  {
      this.contactService.getContacts().subscribe(contacts=>{   
        this.contactService.updateContacts(contacts);  
        this.contacts = contacts;
        console.log(this.contacts);
    });
  }
  delete(contactId): void {
    if (contactId) {
       const model = this.contacts.filter(i=>i.id==contactId)[0];
        if (confirm(`Do you want to delete the contact: ${model.firstName} ${model.lastName}?`)) {
          model.isDeleted = true;  
          this.contactService.saveContact(model)
                .subscribe(
                     res => {
                       console.log(res);
                       this.getAllContacts();
                       this.notificationService.showSuccess(AppMessages.Messages.delete,'Success')
                     },
                    (error: any) => {
                      this.notificationService.showError(AppMessages.Messages.error,'Error');
                    }
                );
        }
    } 
}


}
