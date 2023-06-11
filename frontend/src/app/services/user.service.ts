import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:any={email:'',username:'Anonymouse', password:'', height:0, weight:0,age:0, gender:''};
  userSubject = new BehaviorSubject(this.user);
  setUser(user:any){
    this.userSubject.next(user);
  }
  getUser(){
    return this.userSubject;
  }


}
