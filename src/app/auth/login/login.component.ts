import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  userMessage: string;
  requestError: boolean;
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.requestError = false;
  }
  onLogin(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.Login(email, password).then(resp => {
        if (resp.RequestSucceeded) {
          this.router.navigate(['./Dashboard']);
        }
        else {
          this.userMessage = resp.UserMessage;
        }
        console.log(resp);
      }, err => {
        alert('error' + err);
      })

    }


  }

}
