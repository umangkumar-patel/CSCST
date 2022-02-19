import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Shared/login/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public fb:FormBuilder,private service:LoginService,private toastr: ToastrService) {}

  ngOnInit() {}

  alert:boolean=false;

  loginForm = this.fb.group({
    email: ['umangkumar18@gnu.ac.in', Validators.compose([Validators.required, Validators.email])],
    password: [
      'Umang@123',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  
  Login()
  {  
    this.service.CustomerLogin(this.loginForm.value).subscribe((res:any)=>{


      console.warn(res)
      if(res.statusCode==200)
      {
  
          this.toastr.success('Success',res.messeage);
          console.warn("Yes")
          this.loginForm.reset()
  
  
      }
      else if(res.statusCode==400)
      {
        this.toastr.error('Error',res.messeage);
        
  
  
      }
      
    });
  
    
}
}
