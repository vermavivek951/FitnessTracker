import { Component } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-calwtcomp',
  templateUrl: './calwtcomp.component.html',
  styleUrls: ['./calwtcomp.component.scss']
})
export class CalwtcompComponent {
  entries: any[] = [];
  date: string = new Date().toISOString().substr(0, 10); // Initialize with today's date
  calorie!: number;
  weight: number = 0;
  chart: Chart | undefined;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    Chart.register(...registerables);
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  addEntry() {
    this.calorie = this.userService.getUserCalorie(this.weight);
    console.log(this.calorie);
    if (this.date && this.weight) {
      const entry = {
        date: this.date,
        calorie: this.calorie / 1000,
        weight: this.weight
      };
      this.entries.push(entry);
      this.date = '';
      this.weight = 0;
      this.updateChart();
    }
  }

  updateChart() {
    const labels = this.entries.map(entry => entry.date);
    const calories = this.entries.map(entry => entry.calorie);
    const weights = this.entries.map(entry => entry.weight);

    if (this.chart) {
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = calories;
      this.chart.data.datasets[1].data = weights;
      this.chart.update();
    } else {
      const ctx = document.getElementById('chart') as HTMLCanvasElement;
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Calorie (Kcal)',
              data: calories,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false
            },
            {
              label: 'Weight (kg)',
              data: weights,
              borderColor: 'rgba(255, 99, 132, 1)',
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
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
