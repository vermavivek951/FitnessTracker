import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../title.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private router: Router, private title: TitleService, private http: HttpClient) {
    console.log(this.user);
  }
  user: any = {};
  id!: number;
  username!: string;
  email: string = "";
  password: string = "";
  height: number = 0;
  weight: number = 0;
  gender!: string;
  age!: Date;
  data: any = { name: this.username, email: this.email, password: this.password, height: this.height, weight: this.weight, age: this.age, gender: this.gender };


  // to set the title and navigate to Login Page
  goToLogin() {
    this.router.navigate(['login'])
    this.title.setTitle("Login");
  }

  // to send data to backend
  onSubmit() {
    this.http.post('http://localhost:8080/user/register', this.user).subscribe(response => {
      console.log(response);
      
    });
  }
  // ngOnInit(){
  //   this.user.gender = "select an option";
  // }
  changeSelection($target:any){
    this.user.gender = $target.value;
  }


}
