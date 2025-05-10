import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonCardContent, IonButton, IonList, IonLabel } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { TabService } from '../service/tab/tab.service';
import { SeriesService } from '../service/series/series.service';
import { RecursionService } from '../service/recursion/recursion.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.page.html',
  styleUrls: ['./service-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton, IonList, IonLabel, CommonModule, FormsModule, MyHeaderComponent]
})
export class ServicePagePage implements OnInit {
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput: string[] = [];
  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService
  ) { 
    Chart.register(...registerables)
  }

  xx: string[] = [];
  yySer: number[] = [];
  yyRec: number[] = [];
  yyTab: number[] = [];


  @ViewChild('lineCanvas') private lineCavas?: ElementRef;
  lineChart: any;
  lineChartMake() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCavas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Табулювання',
            data: this.yyTab,
            fill: false,
            borderColor: 'salmon',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 2,
            spanGaps: false,
          },
          {
            label: 'Рекурсія',
            data: this.yyRec,
            fill: false,
            borderColor: '#44ffdd',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 4,
            spanGaps: false,
          },
          {
            label: 'Ряд',
            data: this.yySer,
            fill: false,
            borderColor: '#ffd319',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 6,
            spanGaps: false,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            suggestedMin: 0,
            title: {
              display: true,
              text: 'X',
            },
            ticks: {
              stepSize: 0.001,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Y',
            },
            ticks: {
              stepSize: 0.001,
            }
          }
        }
      }
    });
  }
  ras(xn: any, xk: any, h: any){
    try {
      let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
      this.xx = [];
      this.yyTab = [];
      console.log('Табулювання');
      this.xyTab = this.tabService.getTab(xn1, xk1, h1);
      console.log('Ряд');
      this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
      console.log('Рекурсія');
      this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
      this.input();
      this.lineChartMake();
    } catch {}
  }
  input() {
    this.yyTab = new Array();
    this.yyRec = new Array();
    this.yySer = new Array();
    this.xyInput = [];
    this.xx = Array.from(this.xyTab.keys());
    this.xx.forEach((value, index) => {
      let s = '';
      let y: number = 0;
      y = this.xyTab.get(value);
      this.yyTab.push(y)
      s = s + y.toFixed(4) + '; ';
      y = this.xySeries.get(value);
      this.yySer.push(y)
      s = s + y.toFixed(4) + '; ';
      y = this.xyRecursion.get(value);
      this.yyRec.push(y)
      s = s + y.toFixed(4);
      console.log(s);
      this.xyInput.push(s);
    });
  }
  ngOnInit() {
  }

}
