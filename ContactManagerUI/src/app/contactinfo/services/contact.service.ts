import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppEndPoints } from 'src/app/constants/app.endpoints';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _contacts = new BehaviorSubject<ContactModel[]>(null);
  constructor(private httpService:HttpService) { }

  public contact : Observable<ContactModel[]> = this._contacts.asObservable();

  updateContacts(contactList)
  {
    this._contacts.next(contactList);
  }
  getContacts(): Observable<ContactModel[]>
  {
    let url = AppEndPoints.ContactInfoUrls.getContacts;
    return this.httpService.get(url);
  }
  saveContact(model:ContactModel):Observable<boolean>
  {
    let url = AppEndPoints.ContactInfoUrls.save;
    return this.httpService.post(url,model);
    
  }
}
