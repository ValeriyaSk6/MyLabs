import { Injectable } from '@angular/core';
import { IMusicProduct } from '../products/imusicproduct';
import { MusicProductFactory } from '../products/musicproductfactory';
import { BehaviorSubject } from 'rxjs';

const API_URL = 'https://api.jsonbin.io/v3/b/681f3f238960c979a596ab25';

@Injectable({
  providedIn: 'root'
})
export class ProductReadService {
  public products: IMusicProduct[] = [];
  public loaded$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  public addProduct(item: any): void {
    try {
      const product = MusicProductFactory.createProduct(item);
      console.log('Product created:', product);
      this.products.push(product);
    } catch (error) {
      console.warn('Skipped invalid product:', item, error);
    }
  }

  public async load(): Promise<void> {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await response.json();
      const records = json.record;

      console.log('Records received:', records);
      this.products = [];
      records.forEach((item: any) => this.addProduct(item));

      this.loaded$.next(true);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }
}
