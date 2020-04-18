import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedIn=false;
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  get isUserLoggedIn()
  {    
    return this.loggedInSubject.getValue();
  }
  setIsUserLoggedIn(flag)
  {    
    this.loggedInSubject.next(flag);
  }
  constructor(private http:HttpClient) { }
  login(userName :string,password:string):boolean
  {
    this.setIsUserLoggedIn(true);
    return true;
    //this.http.post()
  }
}
