import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _http: HttpClient, private _route: Router, private title: TitleService, private userService: UserService) {
    this.title.setTitle("Login");
  }
  email!: string;
  password!: string;
  loginError!: string;
  
  loggedIn:boolean=false;
  user = { email: this.email, password: this.password };
  
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  
  getUserName(){
    this._http.get("http://localhost:8080/users").subscribe(response => {
    const allUsers = Object.values(response) as any[];  
    for(const loginUser of allUsers){
      if(loginUser.email==this.user.email){
        const currUser = loginUser.username;
        this.userService.setUserName(currUser);
        console.log(this.userService.getUserName());
        }
      }
    });
    
  }




  OnLoginSubmit() {
    this._http.post("http://localhost:8080/user/login", this.user).subscribe(
      (response: any) => {
        if (response.message === "Login Successful" && this.loggedIn === false) {
          console.log("success");
          this.loggedIn = true;
          this.getUserName()
          this._route.navigate(['home']); //user login sucessfull
        }
        else if (this.loggedIn === true) {
          console.log("already LoggedIn");
          this.getUserName();
          this._route.navigate(['home']);  //user already logged in
        }

      }, (_error: any) => {
        this.loginError = "Invalid Email or password";
        

      });

    

  }

  

  sendToRegisterPage() {
    this._route.navigate(['']);
    
  }

}
