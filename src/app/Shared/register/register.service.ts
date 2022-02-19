import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http:HttpClient) {}
   BaseUrl = "https://localhost:44380/api/Customer/AddCustomers";

  RegisterUser(data:any)
  {
    return this.http.post(this.BaseUrl,data)
  }
 
}
