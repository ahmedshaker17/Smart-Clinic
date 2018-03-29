import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  userMessage: string;
  requestError: boolean;
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.requestError = false;
  }
  onLogin(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.Login(email, password).then(resp => {
        this.userMessage = resp.UserMessage;
       // this.route.navigate(['./']);
        console.log(resp);
      } , err=>{
        alert('error' + err);
      })

    }


  }

}
