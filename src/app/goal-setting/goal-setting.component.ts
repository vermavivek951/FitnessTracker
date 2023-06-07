import { Component } from '@angular/core';
import { GoalsettingService } from '../goalsetting.service';
import { CardDataService } from '../card-data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: ['./goal-setting.component.css'],
  providers: [DatePipe]
})
export class GoalSettingComponent {
  isOpen = false;
  dataList: string[] = ['Swim', 'Eat'];
  goalName: string = '';
  goalIntensity: string = '';
  startDate: string = '';
  duration: number = 0;
  additionalProperties: string = '';
  isFormOpen=false;
  isConfirm = false;
  formValues: any = {};

  constructor(private goalsettingservice:GoalsettingService,private carddataservice :CardDataService,private datePipe: DatePipe){}

  setFormValues(button: string): void {
    this.formValues = this.carddataservice.getButtonValues(button);
    this.goalName=this.formValues.name;
    this.additionalProperties=this.formValues.notes;
    this.startDate=this.datePipe.transform(new Date(), 'dd-MM-yyyy') ?? '01-01-1970';
    this.goalIntensity=this.formValues.intensity;
    this.duration=this.formValues.duration;
    this.opencloseConfirm();
  }

  opencloseConfirm(){
    this.isConfirm=!this.isConfirm;
  }

  open() {
    this.isOpen = !this.isOpen;
    console.log('Button clicked!');
  }
  close(){
    this.isOpen =!this.isOpen;
    this.goalName='';
    this.additionalProperties='';

  }

  onSubmit() {
      console.log('Form submitted!');
      console.log('Goal Name:', this.goalName);
      console.log('Goal Intensity:', this.goalIntensity);
      console.log('Start Date:', this.startDate);
      console.log('Duration:', this.duration);
      console.log('Additional Properties:', this.additionalProperties);

     let res: string[] = [this.goalName,this.goalIntensity,this.duration.toString(),this.startDate,this.additionalProperties];
     this.goalsettingservice.setGoalData(res);
       this.isOpen = false; //  too Close the form
    }

    onCardClick(){
      this.isFormOpen=true;
    }
    handleCardClick() {
      const card = document.querySelector('.card')!;
      card.classList.add('ripple-effect');

      setTimeout(() => {
        card.classList.remove('ripple-effect');
      }, 800);
    }
  }

