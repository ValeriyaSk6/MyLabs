import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formConstructor } from '../forms/form-constructor';
import { productType } from '../products/musicproductfactory';

import {
  IonCard, IonInput, IonCardHeader, IonCardTitle, IonLabel,
  IonItem, IonButton, IonSegment, IonSegmentButton
} from '@ionic/angular/standalone'; 

import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  standalone: true,
    imports: [
      IonButton,
      IonSegment,
      IonSegmentButton,
      IonItem,
      IonCardTitle,
      IonCardHeader,
      IonInput,
      IonCard,
      IonLabel,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ]
})

export class AddProductComponent implements OnInit {
  @Output() productAdd = new EventEmitter<any>();
  productForm!: FormGroup;
  currentType: string = productType[0];
  productTypes = productType;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      type: [this.currentType, Validators.required]  
    });
    this.onTypeChange(this.currentType);
  }

  onTypeChange(type: string | undefined): void {
    if (typeof type === 'string') {
      this.currentType = type;
      formConstructor(type, this.productForm, this.fb);
    }
  }

  onElectronicChange(value: string | boolean | number | null | undefined): void {
    const boolValue = value === 'true';
    this.productForm.get('isElectronic')?.setValue(boolValue);
    this.productForm.get('isElectronic')?.markAsDirty();
    this.productForm.get('isElectronic')?.markAsTouched();
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productAdd.emit(this.productForm.value);
    } else {
      console.error('Форма недійсна');
    }
  }
}