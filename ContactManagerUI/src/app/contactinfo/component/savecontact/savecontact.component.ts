import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactModel } from '../../models/contact.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AppMessages } from 'src/app/constants/app.messages';

@Component({
  selector: 'app-savecontact',
  templateUrl: './savecontact.component.html',
  styleUrls: ['./savecontact.component.scss']
})
export class SavecontactComponent implements OnInit {

  contactForm : FormGroup;
  model:ContactModel;
  contacts: ContactModel[];
  id:number;
  action:string;
  submitted:boolean = false;
  headerText:string = '';
  constructor(private router:Router,private activateRoute:ActivatedRoute,private contactService:ContactService, 
    private formBuilder:FormBuilder,
    private notificationService:NotificationService) { 
    console.log('SavecontactComponent');
    this.id = this.activateRoute.snapshot.params.id;
  }
  
  ngOnInit(): void {
    if(this.id)
    {
      this.getContactForm(this.id);
    }
  }
  getContactForm(id:number)
  {
    if(id==0)
    {
      this.model = new ContactModel();
      this.buildContactForm(this.model);
      this.action='create';
      this.headerText = 'Create New Contact';
    }
    else
    {
      this.contactService.contact.subscribe(contacts =>{
      this.model = contacts.filter(i=>i.id==id)[0];
      this.buildContactForm(this.model);
      })
      this.action='update';
      this.headerText = 'Update Contact'
    }
  }
  buildContactForm(model)
  {
    this.contactForm = this.formBuilder.group({
      firstName : [model.firstName,Validators.required],
      lastName :[model.lastName,Validators.required],
      emailId:[model.emailId,[Validators.required,Validators.email]],
      phoneNumber:[model.phoneNumber,[Validators.required,Validators.minLength(10),
        Validators.maxLength(10),Validators.pattern('^[0-9]*$')]],
      isActive:[model.isActive]
    });
    // this.contactForm = this.formBuilder.group({
    //   firstName : ['',Validators.required],
    //   lastName :['',Validators.required],
    //   emailId:['',Validators.required],
    //   phoneNumber:['',Validators.required],
    //   isActive:[true]
    // });
  }
  onSave()
  { 
    this.submitted = true;
    if(this.contactForm.valid)
    {
      this.setModel();
      this.contactService.saveContact(this.model).subscribe(res=>{
        if(res)
        {
          if(this.action=='update')
          this.notificationService.showSuccess(AppMessages.Messages.update,'Success');
          else  
          this.notificationService.showSuccess(AppMessages.Messages.save,'Success');
        }
        else
        {
          this.notificationService.showError(AppMessages.Messages.error,'Error');
        }
        
      },error=>{
        this.notificationService.showError(AppMessages.Messages.error,'Error');
      });
    }

  }
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
}
  setModel()
  {
    if(this.id!=0)
    this.model.id = this.id;

    this.model.firstName = this.cfCtrls.firstName.value;
    this.model.lastName = this.cfCtrls.lastName.value;
    this.model.emailId = this.cfCtrls.emailId.value;
    this.model.phoneNumber = this.cfCtrls.phoneNumber.value;
    this.model.isActive = this.cfCtrls.isActive.value;
  }
  get cfCtrls() 
  { 
    return this.contactForm.controls; 
  }
}
