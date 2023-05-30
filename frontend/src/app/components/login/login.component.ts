import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'app/services/user.service';
import { FormValidationService } from 'app/services/form-validation.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formValidationService: FormValidationService ,private _http: HttpClient, private _route: Router, private title: TitleService, private userService: UserService) {
    this.title.setTitle("Login");
  }

  loginError!: string;
  loggedIn:boolean=false;
  myform: FormGroup = this.formValidationService.myform;
  user ={email:'', password:''};
  
  OnLoginSubmit() {
    this.user.email = this.myform.value.email;
    this.user.password = this.myform.value.password;

    this._http.post("http://localhost:8080/user/login", this.user).subscribe((response:any) => { 
        if (response.message === "Login Successful") {
          this.loggedIn = true;
          //use id 
          this.getUserName();
          this._route.navigate(['home']); //user login sucessfull
        }
      }, (_error: any) => {
        this.loginError = "Invalid Email or password";
        

      });
  }
  
//check user based on their id
  getUserName(){
  
    this._http.get("http://localhost:8080/users").subscribe(response => {
    const allUsers = Object.values(response) as any[];  
    for(const loginUser of allUsers){
      if(loginUser.email==this.user.email){
        const currUser = loginUser.username;
        this.userService.setUserName(currUser);
        }
      }
    });
    
  }

  sendToRegisterPage() {
    this._route.navigate(['']);
    
  }

}
