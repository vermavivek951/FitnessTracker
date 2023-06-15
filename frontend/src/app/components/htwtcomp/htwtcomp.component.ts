import { Component, OnInit } from '@angular/core';
import { Chart, registerables, scales } from 'chart.js';

@Component({
  selector: 'app-htwtcomp',
  templateUrl: './htwtcomp.component.html',
  styleUrls: ['./htwtcomp.component.scss']
})
export class HtwtcompComponent implements OnInit{
  entries: any[] = [];
  date: string = new Date().toISOString().substr(0, 10); // Initialize with today's date
  height: number = 0;
  weight: number = 0;
  chart: Chart | undefined;

  ngOnInit(): void {
    Chart.register(...registerables);
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  addEntry() {
    if (this.date && this.height && this.weight) {
      const entry = {
        date: this.date,
        height: this.height,
        weight: this.weight
      };
      this.entries.push(entry);
      this.date = '';
      this.height = 0;
      this.weight = 0;
      this.updateChart();
    }
  }

  updateChart() {
    const labels = this.entries.map(entry => entry.date);
    const heights = this.entries.map(entry => entry.height);
    const weights = this.entries.map(entry => entry.weight);

    if (this.chart) {
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = heights;
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
              label: 'Height (cm)',
              data: heights,
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
