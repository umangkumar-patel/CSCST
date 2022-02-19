import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http:HttpClient) {}

  url="https://localhost:44380/api/Customer/Login"
  CustomerLogin(data:any)
  {
    return this.http.post(this.url, data)
  }
  
}
