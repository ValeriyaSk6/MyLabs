import { Component } from '@angular/core';
import { IonContent, IonCardContent, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my-header/my-header.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonContent, MyHeaderComponent, IonCardContent, IonInput, IonItem, IonButton],
})
export class Tab1Page {
  constructor() {}
  result: string = "0";
  calculate(a: any, b: any, c: any){
    let an = Number(a);
    let bn = Number(b);
    let cn = Number(c);
    let num = [an, bn, cn];
    let sum = 0;
    num.forEach((n) => {
      if (n % 9 == 0){
        sum += n
      }
    })
    if (sum % 2 == 1){
      this.result = String(sum);
    }
    else this.result = "Умова не виконується"
  }
}
