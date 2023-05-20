import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/services/title.service';

@Component({
  selector: 'app-exersicetracking',
  templateUrl: './exersicetracking.component.html',
  styleUrls: ['./exersicetracking.component.scss']
})
export class ExersicetrackingComponent implements OnInit {

  constructor(private titleService:TitleService) {
    this.titleService.setTitle("Exercise Tracking");
   }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
