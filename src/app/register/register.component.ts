import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    retypePassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required])
  });
  get emailControl() {
    return this.registerForm.get('email');
  }

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log(this.registerForm);
  }
}
