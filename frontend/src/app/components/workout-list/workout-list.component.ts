import { Component } from '@angular/core';

const ELEMENT_DATA: PeriodicElement[] = [
  {workoutName: 'helo', workoutType: 'Hydrogen', workoutVideo: 1.0079, addWorkout: 'H'},
  {workoutName: 'helo', workoutType: 'Hydrogen', workoutVideo: 1.0079, addWorkout: 'H'},
  {workoutName: 'helo', workoutType: 'Hydrogen', workoutVideo: 1.0079, addWorkout: 'H'},

  
];
export interface PeriodicElement {
  workoutName: string;
  workoutType: string;
  workoutVideo: number;
  addWorkout: string;
}
@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})

export class WorkoutListComponent {
  panelOpenState = false;
  displayedColumns: string[] = ['workoutName', 'workoutType', 'workoutVideo', 'addWorkout'];
  ds = ELEMENT_DATA;
  isOpen = false;
  dataList: any[] = ['Arms','Leg','Abs','Back'];
  showDiv(){
    this.isOpen=true;
  }
  closeDiv(){
    this.isOpen=false;
  }
  
  
}
