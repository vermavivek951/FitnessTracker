import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  credError!: string;


  constructor(private _http: HttpClient, private _route: Router) { }

  login(user: any) {
    this._http.post("http://localhost:8080/user/login", user).subscribe(
      (response: any) => {
        if (response.message === "Login Successful" && this.loggedIn === false) {
          console.log("success");
          this.loggedIn = true;
          this._route.navigate(['home']); //user login sucessfull
          // this.credError = "Sucess";
        }
        else if (this.loggedIn === true) {
          console.log("already LoggedIn");
          this._route.navigate(['home']);  //user already logged in
        }

      }, (_error: any) => {
        console.log(_error);
        console.log("invalid");
        this.credError = "Invalid username or password";

      });
    }
  }
