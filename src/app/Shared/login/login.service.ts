import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http:HttpClient) {}

  url="https://localhost:44339/AddUser"
  login(data:any)
  {
    return this.http.post(this.url, data,{ responseType: 'text' as 'json' })
  }
  
}
