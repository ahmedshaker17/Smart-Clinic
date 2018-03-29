import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PasswordValidation } from '../password-validation';
import { RequestOptions , Headers , Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  SyndicateIDUploaded: string = "SyndicateID is required";
  SyndicateIDStatues : boolean =false;
  constructor(private authService: AuthService, private fb: FormBuilder, private http: Http) {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      mobile : ['',Validators.required]
    }, {
        validator: PasswordValidation.MatchPassword
      })
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form );
    if (this.form.valid && this.SyndicateIDStatues) {
      // save data
      alert("Data Valid");
    } else {
      this.markAsTouched(this.form);
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
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers()
      //headers.append('Content-Type', 'json');  
      //headers.append('Accept', 'application/json');  
      let options = new RequestOptions({ headers: headers });
      let apiUrl1 = "http://localhost:10336/api/FileUploader/upload";
      this.http.post(apiUrl1, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          (data) => {
            console.log('success');
            this.SyndicateIDStatues=true;
            this.SyndicateIDUploaded="SyndicateID Uploaded Successfully";
           },
          error => console.log(error)
        )
    }
  }

}
