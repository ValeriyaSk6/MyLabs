import { Component } from '@angular/core';
import { IonContent, IonCardContent, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my-header/my-header.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonContent, MyHeaderComponent, IonCardContent, IonInput, IonItem, IonButton],
})
export class Tab2Page {
  constructor() {}

  result: string = "";

  calculate(ainp: any, binp: any) {
    let a: number;
    let b: number;
    try {
      a = Number(ainp);
      b = Number(binp);
    }
    catch {
      this.result = "Будь ласка, введіть числа";
      return;
    }

    if (a >= b) {
      this.result = "Друге число має бути більше за перше";
      return;
    }
    let numbers: string[] = [];
    for (let i = Math.ceil(a); i <= b; i++) {
      if (i % 11 === 0 && this.getFirstDigit(i) % 2 === 0) {
        let divisionResult = i / 11;
        numbers.push(`<li>${i} / 11 = ${divisionResult}</li>`);
      }
    }

    if (numbers.length > 0) {
      this.result = `<ul><li>Знайдено підходящих чисел: ${numbers.length}</li>${numbers.join("")}</ul>`;
    } else {
      this.result = "<ul><li>Немає чисел, що задовольняють умову</li></ul>";
    }
  }

  
  getFirstDigit(num: number): number{
    num = Math.floor(Math.abs(num));
    while (num >= 10){
      num = Math.floor(num / 10);
    }
    return num
  }
}



