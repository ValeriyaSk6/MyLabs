import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonCardContent, IonItem, IonInput, IonButton, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my-header/my-header.component";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonContent, MyHeaderComponent, IonCardContent, IonInput, IonItem, IonButton, IonGrid, IonRow, IonCol, CommonModule],
})
export class Tab3Page {
  constructor() {}
  matrix: string[][] = [];  
  result: string = "";

  generateMatrix(n: any) {
    let N: number;

    try {
      N = parseInt(n);
      if (isNaN(N) || N <= 0) {
        throw new Error("Невірне число");
      }
    } catch {
      this.result = "Введіть ціле число, більше за 0!";
      return;
    }


    this.matrix = [];
    let diagonalPrime = 0;


    for (let i = 0; i < N; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < N; j++) {
        let randomNumber = Math.floor(Math.random() * 100); 
        this.matrix[i].push(randomNumber.toString()); 


        if (i === j && this.isPrime(randomNumber)) {
          diagonalPrime++;
        }
      }
    }
    this.result = `На головній діагоналі знайдено ${diagonalPrime} простих чисел`
    
  }

  isPrime(num: number): boolean {      
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;      

    for (let i = 5; i * i <= num; i += 6) {                   
        if (num % i === 0 || num % (i + 2) === 0) {           //всі прості числа, окрім 2 та 3, не діляться на парні числа і числа, кратні 3
            return false;
        }
    }
    return true;
}
}

