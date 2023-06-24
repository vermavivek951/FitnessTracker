import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormValidationService } from 'app/services/form-validation.service';
import { TitleService } from 'app/services/title.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: any;
  allowEdit = false;
  id!: string;
  message:string = ""
  saved: boolean = false;

  constructor(private http: HttpClient, private formValidationService: FormValidationService, private titleService: TitleService, private userService: UserService) {
    this.titleService.setTitle("Profile");

    userService.userSubject.subscribe(userData => {
      this.user = userData;
    })

  }
  ngOnInit() {

  }



  enableEdit() {
    this.allowEdit = true;
  }

  UpdateProfile() {
    this.id = this.user.id;
    this.saved = true;

    this.http.put(`http://localhost:8080/users/${this.id}`, this.user).subscribe(response => {
      // alert("Updated");
      console.log(response);
      this.userService.userSubject.next(this.user);
      this.message = "Profile Updated Successfully!"
      setTimeout(()=>{
        this.saved = false;
      },3000);
    })
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }



}
