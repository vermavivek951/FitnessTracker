import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:any={email:'',username:'DefaultUser', password:'', height:67, weight:56,age:20, gender:'Female'};
  userSubject = new BehaviorSubject(this.user);
  setUser(user:any){
    this.userSubject.next(user);
  }
  getUser(){
    return this.userSubject;
  }


}
