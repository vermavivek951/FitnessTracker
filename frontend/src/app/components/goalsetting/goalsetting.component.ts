import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/services/title.service';

@Component({
  selector: 'app-goalsetting',
  templateUrl: './goalsetting.component.html',
  styleUrls: ['./goalsetting.component.scss']
})
export class GoalsettingComponent implements OnInit {

  constructor(private titleService:TitleService) 
  {
    titleService.setTitle("Goal Setting");
  }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
