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
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    Password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  data()
  {

   




      this.service.login(this.loginForm.value).subscribe((res:any)=>
      {
        if(res=="Added")
        { 
        this.toastr.success('Success',res);
        this.loginForm.reset()

        }
        else if(res=="User Already Exist")
        {
          this.toastr.error('Error',res);
        }
       
      })
  
    
  }
}
