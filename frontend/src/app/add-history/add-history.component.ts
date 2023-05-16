import { Component } from '@angular/core';

export class PeriodicElement {
  workoutName: string;
  workoutType: string;
  workoutDuration: number;
  date: string;
  sets:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {workoutName: 'helo', workoutType: 'Hydrogen', workoutDuration: 1.0079, date: 'H',sets:1},
  {workoutName: 'helo', workoutType: 'Hydrogen', workoutDuration: 1.0079, date: 'H',sets:1},
  {workoutName: 'helo', workoutType: 'Hydrogen', workoutDuration: 1.0079, date: 'H',sets:1},

  
];
@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.css']
})
export class AddHistoryComponent {
  displayedColumns: string[] = ['workoutName', 'workoutType', 'workoutDuration', 'date','sets'];
  dataSource = ELEMENT_DATA;
}
