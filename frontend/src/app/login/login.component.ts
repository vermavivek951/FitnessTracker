import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TitleService } from '../title.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  user = {username : this.username, password: this.password };
  
  OnLoginSubmit(){
    this.http.post("http://localhost:8080/user/login",this.user).subscribe(response=>{
      console.log(response);
    },(_error: any)=>{
      console.log(_error);
    });
  }

  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private http: HttpClient, private router: Router, private title:TitleService) { }

  sendToRegisterPage() {
    this.router.navigate(['']);
    this.title.setTitle("Register");
  }
  
}
