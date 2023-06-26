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
  id!: number;
  imageBlob!: Blob;
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
            // creating imageblob
            var img: string = "./../../../assets/icon/user.png";
            this._http.get(img, { responseType: 'blob' }).subscribe(blob => {
              this.imageBlob = blob;
            })

            //use id 
            this.setUsertoUserService();

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
          this.loggedIn = true;
          this.id = loginUser.id;


          // setting authentication to true when user logs in
          this.authService.setAuthentication(this.loggedIn);

          // giving all details of logged user in userService
          this.userService.setUser(loginUser);
          // set default dp
          if (loginUser.content == null) {
            const formData: FormData = new FormData();
            formData.append('file', this.imageBlob);
            this._http.put(`http://localhost:8080/update/${this.id}`, formData, loginUser).subscribe((updatedUser: any) => {
              next: this.userService.setUser(updatedUser);
              console.log("updatedUser:", updatedUser);

            })
          }
          this._route.navigate(['home']);//user login sucessfull
        }
      }
    });
  }


  sendToRegisterPage() {
    this._route.navigate(['']);

  }

}
