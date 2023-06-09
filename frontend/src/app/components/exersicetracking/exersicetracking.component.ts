import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/services/title.service';
import { DataService } from 'app/services/data.service';
import { Chart, registerables } from 'chart.js';
import { IComp } from '../IComp';

Chart.register(...registerables);

@Component({
  selector: 'app-exersicetracking',
  templateUrl: './exersicetracking.component.html',
  styleUrls: ['./exersicetracking.component.scss']
})
export class ExersicetrackingComponent implements OnInit {

  myCha:any;

  dataArray:IComp[] = this.dataservice.getDataArray();

  constructor(private titleService:TitleService, private dataservice: DataService) {
    this.titleService.setTitle("Exercise Tracking");
   }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  displaychart(){
    for(var val of this.dataArray){
    this.myCha = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: ['Swimming', 'Cycling', 'Yoga', 'Exercise', 'Running'],
            datasets: [{
                label: '# no. of minutes',
                data: [val.Swiminput, val.Cycleinput, val.Yogainput, val.Exerciseinput, val.Runinput],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

  }
 
}
}
