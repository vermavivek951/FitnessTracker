import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidationService } from 'app/services/form-validation.service';
import { UserAuthService } from 'app/services/user-auth.service';
import { UserService } from 'app/services/user.service';
import { TitleService } from '../../services/title.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: UserAuthService, private formValidationService: FormValidationService, private _http: HttpClient, private _route: Router, private title: TitleService, private userService: UserService) {
    this.title.setTitle("Login");
  }

  loginError!: string;
  loggedIn: boolean = false;
  myform: FormGroup = this.formValidationService.myform;
  user = { email: '', password: '' };

  OnLoginSubmit() {
    this.user.email = this.myform.value.email;
    this.user.password = this.myform.value.password;

    this._http.post("http://localhost:8080/user/login", this.user).subscribe(
      {
        next: (response: any) => {
          if (response.message === "Login Successful") {
            this.loggedIn = true;
            // setting authentication to true when user logs in
            this.authService.setAuthentication(this.loggedIn);
            //use id 
            this.setUsertoUserService();
            this._route.navigate(['home']); //user login sucessfull
          }
        },
        error: (_error: any) => {
          console.log(_error);
          this.loginError = "Invalid Email or password";
        }
      });
  }

  //check user based on their id
  setUsertoUserService() {

    this._http.get("http://localhost:8080/users").subscribe(response => {
      for (const loginUser of response as any[]) {
        if (loginUser.email == this.user.email) {
          // giving all details of logged user in userService
          this.userService.setUser(loginUser);
        }
      }
    });
  }

  
  sendToRegisterPage() {
    this._route.navigate(['']);

  }

}
