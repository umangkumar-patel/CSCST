import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http:HttpClient) {}
  // readonly BaseUrl = 'http://localhost:5096/api';

  hello()
  {
    return "hello";
  }
 
}
