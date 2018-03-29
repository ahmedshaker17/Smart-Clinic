import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { PasswordValidation } from '../password-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      fullName: ['', Validators.required]
    }, {
        validator: PasswordValidation.MatchPassword
      })
  }

  ngOnInit() {
  }
  onRegister() {
    if (this.form.valid) {
      const fullName = this.form.value.fullName;
      const email = this.form.value.email;
      const password = this.form.value.password;
      this.authService.register({ username: fullName, email: email, password: password });
    }
    else {
      this.markAsTouched(this.form);
    }
  }
  markAsTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).map((field) => {
      const control = group.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.markAsTouched(control);
      }
    });
  }
  

}
