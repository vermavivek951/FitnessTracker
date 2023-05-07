import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  message: any;
  constructor(private http :HttpClient){}

  
open(){
    this.http.get<String>('http://localhost:8080/api/users/getString').subscribe(response =>{
      this.message = response.toString();
      
    },(error)=>{
      console.log(error);
    })
  }
}
