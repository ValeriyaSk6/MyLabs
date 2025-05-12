import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formConstructor } from '../forms/form-constructor';
import { productType } from '../products/musicproductfactory'; 
import { IMusicProduct } from '../products/imusicproduct';  
import { MusicProductFactory } from '../products/musicproductfactory'; 

import {
  IonCard, IonInput, IonCardHeader, IonCardTitle, IonLabel,
  IonCardContent, IonItem, IonButton, IonSegment, IonSegmentButton
} from '@ionic/angular/standalone';  

import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  standalone: true,
  imports: [
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonItem,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonInput,
    IonCard,
    IonLabel,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @Input() product!: IMusicProduct;
  @Output() productEdit: EventEmitter<IMusicProduct> = new EventEmitter<IMusicProduct>();
  productForm!: FormGroup;
  productTypes = productType;  // Типи товарів для вибору

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Створення базових контролів форми
    this.productForm = this.fb.group({
      name: [this.product.getName(), [Validators.required, Validators.minLength(3)]],
      price: [this.product.getPrice(), [Validators.required, Validators.min(0)]],
    });

    // Виклик formConstructor для заповнення форми на основі типу продукту
    formConstructor(this.product.getType(), this.productForm, this.fb);
  }

  onElectronicChange(value: string | boolean | number | null | undefined): void {
    const boolValue = value === 'true';
    this.productForm.get('isElectronic')?.setValue(boolValue);
    this.productForm.get('isElectronic')?.markAsDirty();
    this.productForm.get('isElectronic')?.markAsTouched();
  }  

  onSubmit(): void {
    if (this.productForm.valid) {
      // Отримуємо дані з форми
      const formData = this.productForm.value;
      formData.type = this.product.getType();

      // Виклик фабрики для створення об'єкта продукту
      const updatedProduct = MusicProductFactory.createProduct(formData);

      // Відправка події з оновленим продуктом
      this.productEdit.emit(updatedProduct);
    } else {
      console.error('Форма недійсна');
    }
  }
}
