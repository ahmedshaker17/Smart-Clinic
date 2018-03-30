import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PasswordValidation } from '../password-validation';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { FileUploaderService } from '../../shared/fileUploader.service';
import { CustomResponse } from '../../shared/CustomResponse.model';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  SyndicateIDUploaded: string = "SyndicateID is required";
  SyndicateIDStatues: boolean = false;
  submitted : boolean =false;
  constructor(private authService: AuthService, private uploaderService: FileUploaderService, private fb: FormBuilder, private http: Http) {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      mobile: ['', Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)],
      gender: ['']
    }, {
        validator: PasswordValidation.MatchPassword
      })
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);
    this.submitted=true;
    if (this.form.valid && this.SyndicateIDStatues) {
      const _username = this.form.value.fullName;
      const _email = this.form.value.email;
      const _password = this.form.value.password;
      const _gender = this.form.value.gender;
      const _mobile = this.form.value.mobile;
      let body = {fullName :_username , password : _password , email : _email , mobile : _mobile , Gender : _gender }
      this.authService.register(body).then( 
      (resp : CustomResponse)=>{

      }, 
      (error : Error)=>{

      });

    } else {
      this.markAsTouched(this.form);
      console.log(this.form);
    }
  }
  onRegister(isValid: boolean) {
    console.log(isValid);
    // if (form.valid) {
    //  const fullName = form.value.fullName;
    // const email = form.value.email;
    //  const password = form.value.password;
    //  this.authService.register({ username: fullName, email: email, password: password });
    // }
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
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.uploaderService.uploadFile(fileList).then((resp: CustomResponse) => { 
        this.SyndicateIDStatues = resp.RequestSucceeded;
        this.SyndicateIDUploaded = resp.UserMessage;
      },
      (error: HttpErrorResponse) => {
        this.SyndicateIDStatues = false;
        this.SyndicateIDUploaded = "dddddddddd";
      });
    }
  }

}
