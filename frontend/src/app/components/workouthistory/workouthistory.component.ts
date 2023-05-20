import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/services/title.service';


export class PeriodicElement {
  workoutName!: string;
  workoutType!: string;
  workoutDuration!: number;
  date!: string;
  sets!:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {workoutName: 'hello', workoutType: 'Hydrogen', workoutDuration: 1.0079, date: 'H',sets:1},
  {workoutName: 'hello', workoutType: 'Hydrogen', workoutDuration: 1.0079, date: 'H',sets:1},
  {workoutName: 'hello', workoutType: 'Hydrogen', workoutDuration: 1.0079, date: 'H',sets:1},

  
];

@Component({
  selector: 'app-workouthistory',
  templateUrl: './workouthistory.component.html',
  styleUrls: ['./workouthistory.component.scss']
})

export class WorkouthistoryComponent implements OnInit {

  displayedColumns: string[] = ['workoutName', 'workoutType', 'workoutDuration', 'date','sets'];
  dataSource = ELEMENT_DATA;
 

  constructor(private titleService:TitleService) { 
    this.titleService.setTitle("Workout History");
  }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
