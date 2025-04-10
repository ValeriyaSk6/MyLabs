import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonContent, IonCheckbox, IonItem } from '@ionic/angular/standalone';
import { EquipmentList } from '../sport/equipmentList';
import { Equipment } from '../sport/equipment';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.page.html',
  styleUrls: ['./abstract.page.scss'],
  standalone: true,
  imports: [
    MyHeaderComponent,
    IonContent,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonLabel,
    
  
  ]
})
export class AbstractPage implements OnInit {
  eqList: EquipmentList = new EquipmentList();

  JSONUrl: string = "https://api.jsonbin.io/v3/b/67dc05848960c979a5753f82";
  avWeight: number = 0;

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    fetch(this.JSONUrl)
      .then(response => response.json())
      .then(data => {
        const items = data.record; 
        console.error(items);

        items.forEach((item: any) => {        //перебираємо всі ел. масиву items
          const attribute = item.hasOwnProperty("EqLength") ? item.EqLength : item.isAdjustable; 
          this.eqList.addEquipment(item.type, item.name, item.weight, item.material, attribute); //додаємо запис у ліст
          this.avWeight += item.weight; //додаємо вагу
        });
        this.avWeight /= this.eqList.eqList.length;
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }

  getColor(weight: number){
    if(weight < this.avWeight) return "#008000";
    else if (weight > this.avWeight) return "#ff0000";
    else return "#ffff00";
  }
}
