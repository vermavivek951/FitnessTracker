import { Component } from '@angular/core';
import { TitleService } from 'app/services/title.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  email!:string;
  name!:string;
  weight!:string;
  age !:string;
  height!:string;
  gender!:string;
  allowEdit = false;
  constructor(private titleService:TitleService, private userService:UserService){
    this.titleService.setTitle("Profile");
  }
  ngOnInit(){

    this.userService.userSubject.subscribe((user:any)=>{
      this.email = user.email;
      this.name = user.username;
      this.age = user.age;
      this.weight = user.weight;
      this.height = user.height;
      this.gender = user.gender;
    })
  }


  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  edit(){
    this.allowEdit = !this.allowEdit;
  }

}
