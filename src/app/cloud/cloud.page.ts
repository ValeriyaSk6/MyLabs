import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { StudentList } from '../students/StudentList';
import { Student } from '../students/Student'
import { Chart, registerables } from 'chart.js';
import { LoadingController, AlertController, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel} from '@ionic/angular/standalone'
@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, MyHeaderComponent, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel]
})
export class CloudPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  students = new StudentList();
  dataURL = 'https://api.jsonbin.io/v3/b/67dc05628561e97a50efa964';
  loading: any;
  lineChart: any;
  groups: string[] = []
  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    const groupsAverage = this.groups.map(group => { //перебираємо всі групи
      const studentsInGroup = this.students.listOfStudents.filter(s => s.group === group); //вибираємо студентів лише з поточної
  
      const averageGrade = studentsInGroup.reduce((sum, student) => sum + student.average_grade, 0) / studentsInGroup.length;
  
      return averageGrade;
  });

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: this.groups, 
        datasets: [{
          label: 'Середній бал групи',
          data: groupsAverage,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Починаємо вісь Y з 0
            ticks: {
                stepSize: 1 
            }
          }
        }
      }
    });
  }

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
    Chart.register(...registerables);
   }

  ngOnInit() {
    this.loading = true; // Показуємо індикатор завантаження

    fetch(this.dataURL)
      .then(response => response.json())
      .then(data => {
        const records = data.record;
        records.forEach((record: any) => {
          const newClass = new Student(record.name, record.group, record.average_grade, record.scholarship);
          this.students.addStudent(newClass);
          if (!this.groups.includes(record.group)) {
            this.groups.push(record.group);
          }
        });
        this.lineChartMethod();
        this.loading = false; // Приховуємо індикатор завантаження
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        this.loading = false; // Приховуємо індикатор завантаження навіть у разі помилки
      });
  }

  filterStudentsByGroup(group: string) {
    return this.students.listOfStudents.filter(student => student.group === group);
  }
  
}
