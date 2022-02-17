import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Shared/register/register.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder,private service:RegisterService) {}

  ngOnInit() {
    // this.registerSevice.registerForm.reset();
  }

  registerForm = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    Password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
    ProflePhoto: [''],
    PhoneNumber: [
      '',
      Validators.compose([Validators.required, Validators.minLength(10)]),
    ],
    AlternatePhoneNumber: [
      '',
      Validators.compose([Validators.required, Validators.minLength(10)]),
    ],
  });

  data()
  {
    // console.warn(this.registerForm.value)
  console.warn(this.service.hello());

  }
  
}
