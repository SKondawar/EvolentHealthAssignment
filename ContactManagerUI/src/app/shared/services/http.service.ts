import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseApiUrl;
  constructor(private httpClient:HttpClient) { 

  }
  get(url: string, params?: HttpParams, responseType: any ='json' ):Observable<any>
  {
    let apiUrl = this.baseUrl + url;
    if (params) {
      return this.httpClient.get(apiUrl, { params: params, responseType: responseType });
    } else {
      return this.httpClient.get(apiUrl, { responseType: responseType });
    }
  }
  post(url: string, postBody: any, responseType: any = 'json'): Observable<any> {
    const apiUrl = this.baseUrl + url;
   return this.httpClient.post(apiUrl, postBody, { responseType: responseType });
  }
    
}
