import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'app/services/user.service';


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
  id: string = "1";
  username!: string;
  email: string = "";
  password: string = "";
  height: number = 0;
  weight: number = 0;
  gender!: string;
  age!: number;
  data: any = { name: this.username, email: this.email, password: this.password, height: this.height, weight: this.weight, age: this.age, gender: this.gender };


  // to set the title and navigate to Login Page
  goToLogin() {
    this.router.navigate(['login'])
    
  }

  // to send data to backend
  onSubmit() {
    this.http.post('http://localhost:8080/user/register', this.user).subscribe(response => {
      console.log(response);

    });

    this.router.navigate(['login'])
  }

  // ngOnInit(){
  //   this.user.gender = "select an option";
  // }
  changeSelection($target: any) {
    this.user.gender = $target.value;
  }




}