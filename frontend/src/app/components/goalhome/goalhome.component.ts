import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/services/title.service';

@Component({
  selector: 'app-goalhome',
  templateUrl: './goalhome.component.html',
  styleUrls: ['./goalhome.component.scss']
})
export class GoalhomeComponent implements OnInit{
  constructor(private titleService:TitleService){
    this.titleService.setTitle("Goal Home")
  }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}


