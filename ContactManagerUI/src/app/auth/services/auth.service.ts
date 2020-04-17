import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedIn=false;
  get isUserLoggedIn()
  {
    return this.userLoggedIn;
  }
  constructor(private http:HttpClient) { }
  login(userName :string,password:string):boolean
  {
    this.userLoggedIn=true;
    return true;
    //this.http.post()
  }
}
