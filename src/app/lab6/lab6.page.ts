import { Component, OnInit } from '@angular/core';
import { ProductReadService } from '../productservices/product-read.service';
import { IMusicProduct } from '../products/imusicproduct';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonItem, IonLabel, IonContent } from '@ionic/angular/standalone';
import { NgFor, NgIf } from '@angular/common';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
  standalone: true,
  imports: [
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonButton, IonItem, IonLabel, IonContent,
    NgFor, NgIf, MyHeaderComponent
  ]
})
export class Lab6Page implements OnInit {
  constructor(public productReadService: ProductReadService) {}

  ngOnInit() {
    this.productReadService.load();
  }
}
