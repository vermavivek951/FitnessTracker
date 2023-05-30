import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'app/services/user.service';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from 'app/services/form-validation.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  user: any = {};
  isFormCorrect: boolean = true;
  myform: FormGroup = this.formValiadtionService.myform;

  constructor(private formValiadtionService: FormValidationService, private userService: UserService, private router: Router, private title: TitleService, private http: HttpClient) {
    console.log(this.user);
    this.title.setTitle("Register");
  }
 

  // to send data to backend
  onSubmit() {
    this.user.username = this.myform.value.username;
    this.user.email = this.myform.value.email;
    this.user.password = this.myform.value.password;
    this.user.weight = this.myform.value.weight;
    this.user.height = this.myform.value.height;
    this.user.age = this.myform.value.age;
    this.user.gender = this.myform.value.gender;
    console.log(this.user);
    if (this.myform.valid) {
      this.http.post('http://localhost:8080/user/register', this.user).subscribe(response => {
        console.log(response);
        //user already present in the database should be implemented here 
      });
      //check for backend status before routing
      this.router.navigate(['login']);
    }
  }


  // to navigate to Login Page
  goToLogin() {
    this.router.navigate(['login'])

  }




}
