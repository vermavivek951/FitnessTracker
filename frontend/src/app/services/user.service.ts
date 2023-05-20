import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName!: string;
  private userNameSubject = new BehaviorSubject(this.userName);
  
  getUserName(){
    return this.userName;
  }
  setUserName(user:string){
    this.userNameSubject.next(user);
  }

  getUserNameObservable(): Observable<string> {
    return this.userNameSubject.asObservable();
  }



  
}
