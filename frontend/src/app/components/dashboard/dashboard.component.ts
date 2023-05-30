import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/services/title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private titleService:TitleService) { 
    this.titleService.setTitle("Dashboard");
  }

  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    
  }

}
