import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'app/services/user.service';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private userService: UserService, private router: Router, private title: TitleService, private http: HttpClient) {
    console.log(this.user);
    this.title.setTitle("Register");
  }
  user: any = {};
  isFormCorrect:boolean = true;
 
 myform = new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  username : new FormControl('', [Validators.required, Validators.minLength(3)]),
  password: new FormControl('', [Validators.required]),
  height : new FormControl('', [Validators.required]),
  weight : new FormControl('', [Validators.required]),
  age : new FormControl('', [Validators.required]),
  gender : new FormControl(''),
  
  
 })

 ngOnInit(){
 
 }
  // to navigate to Login Page
  goToLogin() {
    this.router.navigate(['login'])
    
  }

  // to send data to backend
  onSubmit() {
    if(this.myform.valid){
      this.http.post('http://localhost:8080/user/register', this.user).subscribe(response => {
        console.log(response);
  
      });
      this.router.navigate(['login']);
    }else{
      this.isFormCorrect = false;
    }
  }

  changeSelection($target: any) {
    this.user.gender = $target.value;
  }




}
