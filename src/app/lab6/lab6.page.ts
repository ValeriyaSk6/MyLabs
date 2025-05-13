import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductReadService } from '../productservices/product-read.service';
import { IMusicProduct } from '../products/imusicproduct';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonItem, IonLabel, IonContent } from '@ionic/angular/standalone';
import { NgFor, NgIf } from '@angular/common';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { AddProductComponent } from '../add-product/add-product.component'; 
import { EditProductComponent } from '../edit-product/edit-product.component'; 
import { Subscription } from 'rxjs';
import { ProductTypeSelectorService } from '../productservices/product-type-selector.service';
import { productType } from '../products/musicproductfactory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
  standalone: true,
  imports: [
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonButton, IonItem, IonLabel, IonContent,
    NgFor, NgIf, MyHeaderComponent, AddProductComponent, EditProductComponent, FormsModule
  ]
})
export class Lab6Page implements OnInit, OnDestroy {
  searchProducts: IMusicProduct[] = [];
  private subscriptions: Subscription[] = [];
  showAddForm = false;
  showEditForm = false;
  selectedProduct: IMusicProduct | null = null;

  constructor(
    public productReadService: ProductReadService,
    public productTypeSelector: ProductTypeSelectorService,
  ) {}

  ngOnInit() {
    this.productReadService.load();

    const loadSub = this.productReadService.loaded$.subscribe(loaded => {
      if (loaded) {
        const filteredSub = this.productReadService.filteredProducts$.subscribe(products => {
          this.searchProducts = products;
        });
        this.subscriptions.push(filteredSub);
      }
    });

    this.subscriptions.push(loadSub);
  }

  nextType() {
    const current = this.productTypeSelector.CurrentType;
    const currentIndex = productType.indexOf(current);
    const nextIndex = (currentIndex + 1) % productType.length;
    const next = productType[nextIndex];
    this.productTypeSelector.setType(next);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  addFormShow() {
    this.showAddForm = true;
  }

  addProduct($event: any) {
    this.productReadService.addProduct($event);
    this.searchProducts = this.productReadService.products;
    this.showAddForm = false;
  }

  editProduct(product: IMusicProduct) {
    this.selectedProduct = product;
    this.showEditForm = true;
  }

  onProductEdit(updatedProduct: IMusicProduct) {
    if (this.selectedProduct != null) {
      const index = this.productReadService.products.indexOf(this.selectedProduct);
      if (index !== -1) {
        this.productReadService.products[index] = updatedProduct;
        this.showEditForm = false;
        this.selectedProduct = null;
      }
    }
    this.searchProducts = this.productReadService.products;
  }

  deleteProduct(removedProduct: IMusicProduct) {
    const index = this.productReadService.products.findIndex(product => product === removedProduct);
    if (index !== -1) {
      this.productReadService.products.splice(index, 1);
    }
    this.searchProducts = this.productReadService.products;
  }

}