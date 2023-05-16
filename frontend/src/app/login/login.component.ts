import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TitleService } from '../title.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor( private http: HttpClient, private router: Router, private title: TitleService, private authService : AuthService) { }
  username!: string;
  password!: string;
  loginError!:string;
  user = { username: this.username, password: this.password };


  OnLoginSubmit() {
    this.authService.login(this.user);
    this.loginError = this.authService.credError;
  }

  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  sendToRegisterPage() {
    this.router.navigate(['']);
    this.title.setTitle("Register");
  }

}
