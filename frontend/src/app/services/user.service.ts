import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any = { email: '', username: 'DefaultUser', password: '', height: 67, weight: 56, age: 20, gender: 'Female' };
  userCalorie: number = 2000;
  userSubject = new BehaviorSubject(this.user);
  setUser(user: any) {
    this.userSubject.next(user);
  }
  getUser() {
    return this.userSubject;
  }





  getUserCalorie(weight: number) {
    var BMR = 0;
    var activity_factor = 1.2;

    this.userSubject.subscribe((userData) => {
      if (userData.gender == "Male") {
        BMR = (10 * weight) + (6.25 * userData.height) - (5 * userData.age) + 5;
      } else {
        BMR = (10 * weight) + (6.25 * userData.height) - (5 * userData.age) - 161;
      }
      // getting activity_factor if one workout allowed perday
      if (userData.workouts.length > 0 && userData.workouts.length <= 3)
        activity_factor = 1.375;
      else if (userData.workouts.length > 3 && userData.workouts.length <= 5)
        activity_factor = 1.55;
      else if (userData.workouts.length > 5 && userData.workouts.length <= 7)
        activity_factor = 1.725;
      else if (userData.workouts.length > 7)
        activity_factor = 1.9;
      // calorie calculation
      this.userCalorie = BMR * activity_factor;
    })
    return this.userCalorie;
  }

}
