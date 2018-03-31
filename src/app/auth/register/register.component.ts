import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/Router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { FileUploaderService } from '../../shared/fileUploader.service';
import { PasswordValidation } from '../password-validation';
import { CustomResponse, PhysicianResponse } from '../../shared/CustomResponse.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  syndicateID: string;
  form: FormGroup;
  SyndicateIDUploaded: string = "SyndicateID is required";
  SyndicateIDStatues: boolean = false;
  submitted: boolean = false;
  constructor(private authService: AuthService, private uploaderService: FileUploaderService, private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required , Validators.email],
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
    this.submitted = true;
    if (!this.form.invalid && this.SyndicateIDStatues) {
      const _username = this.form.value.fullName;
      const _email = this.form.value.email;
      const _password = this.form.value.password;
      const _gender = this.form.value.gender;
      const _mobile = this.form.value.mobile;
      const _imgPath = this.syndicateID;
      let body = {
        fullName: _username, password: _password,
        email: _email, mobile: _mobile, Gender: _gender, SydnicateImagePath: _imgPath
      }
      this.authService.register(body).then(
        (resp: PhysicianResponse) => {
          this.authService.handleProfileAccess(resp);
        },
        (error: Error) => {

        });

    } else {
      this.markAsTouched(this.form);
      console.log(this.form);
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
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.uploaderService.uploadFile(fileList).then((resp: PhysicianResponse) => {
        this.SyndicateIDStatues = resp.RequestSucceeded;
        this.syndicateID = resp.SyndicateIDImgUrl;
        alert(resp.UserMessage);
      },
        (error: HttpErrorResponse) => {
          this.SyndicateIDStatues = false;
          this.SyndicateIDUploaded = error.error;
        });
    }
  }

}
