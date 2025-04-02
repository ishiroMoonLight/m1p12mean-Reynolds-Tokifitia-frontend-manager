import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employeeCount:number = 120;
  clientCount:number = 5050;

  ngOnInit(): void {
    this.renderCharts();
  }

  renderCharts() {
    // Dépenses - Bar Chart
    new Chart("spendingsChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Dépenses (AR)',
          data: [50000, 70000, 65000, 90000, 80000, 75000],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1500,
          easing: 'easeInOutBounce'
        }
      }
    });

    // Trafic Humain - Line Chart
    new Chart("humanTrafficChart", {
      type: 'line',
      data: {
        labels: ['08h', '10h', '12h', '14h', '16h', '18h'],
        datasets: [{
          label: 'Fréquentation',
          data: [5, 15, 30, 25, 20, 10],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          fill: false,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1200,
          easing: 'easeInOutQuad'
        }
      }
    });

    // Réparations les plus demandées - Pie Chart
    new Chart("topRepairsChart", {
      type: 'pie',
      data: {
        labels: ['Vidange', 'Freinage', 'Moteur', 'Pneus', 'Électricité'],
        datasets: [{
          label: 'Réparations',
          data: [40, 25, 15, 10, 10],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1000,
          easing: 'easeInOutCubic'
        }
      }
    });
  }
}
