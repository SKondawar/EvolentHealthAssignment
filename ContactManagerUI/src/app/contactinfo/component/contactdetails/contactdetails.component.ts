import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ContactModel } from '../../models/contact.model';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.scss']
})
export class ContactdetailsComponent implements OnInit {
  id:number;
  contact: ContactModel;
  contactList : ContactModel[];
  constructor(private router: Router,private route: ActivatedRoute,private contactService:ContactService) { 
    console.log('ContactdetailsComponent');
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.contactService.contact.subscribe(contactList=>{
      if(contactList)
      {
        this.contact =  contactList.filter(c => c.id == this.id)[0];
      }  
    });
  }
  showList()
  {
    this.router.navigate(['contactinfo']);
  }
  editContact()
  {
    this.router.navigate(['/save',3]);
    //[routerLink]="['/save',3]
  }

}
