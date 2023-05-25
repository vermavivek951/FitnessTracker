import { Component } from '@angular/core';
import { TitleService } from 'app/services/title.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private titleService:TitleService){
    this.titleService.setTitle("Profile");
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
