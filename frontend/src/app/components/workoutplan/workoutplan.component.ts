import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/services/title.service';

const ELEMENT_DATA: PeriodicElement[] = [
  { workoutName: 'helo', workoutType: 'Hydrogen', workoutVideo: 1.0079, addWorkout: 'H' },
  { workoutName: 'helo', workoutType: 'Hydrogen', workoutVideo: 1.0079, addWorkout: 'H' },
  { workoutName: 'helo', workoutType: 'Hydrogen', workoutVideo: 1.0079, addWorkout: 'H' },


];
export interface PeriodicElement {
  workoutName: string;
  workoutType: string;
  workoutVideo: number;
  addWorkout: string;
}

@Component({
  selector: 'app-workoutplan',
  templateUrl: './workoutplan.component.html',
  styleUrls: ['./workoutplan.component.scss']
})
export class WorkoutplanComponent implements OnInit {
  show: string = "btns";

  panelOpenState = false;
  displayedColumns: string[] = ['workoutName', 'workoutType', 'workoutVideo', 'addWorkout'];
  ds = ELEMENT_DATA;
  isOpen = false;
  isSubmitted: boolean = false;
  dataList: any[] = ['Arms', 'Leg', 'Abs', 'Back'];

  operation(name: string) {
    this.show = name;
  }


  showDiv() {
    this.isOpen = true;
  }
  closeDiv() {
    this.isOpen = false;
  }
  constructor(private titleService: TitleService) {
    this.titleService.setTitle("Workout Plan");
  }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  AddToHistory() {
    this.isSubmitted = true;
  }

}
