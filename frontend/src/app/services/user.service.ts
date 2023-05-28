import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string = "Anonymouse";
  userNamebSubject = new BehaviorSubject(this.userName);

  getUserName() {
    return this.userName;
  }
  setUserName(user: string) {
    this.userNamebSubject.next(user);
  }

}
