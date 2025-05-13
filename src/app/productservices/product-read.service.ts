import { Injectable } from '@angular/core';
import { IMusicProduct } from '../products/imusicproduct';
import { MusicProductFactory } from '../products/musicproductfactory';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { ProductTypeSelectorService } from './product-type-selector.service';

const API_URL = 'https://api.jsonbin.io/v3/b/681f3f238960c979a596ab25';

@Injectable({
  providedIn: 'root'
})
export class ProductReadService {
  public products: IMusicProduct[] = [];
  private productsSubject = new BehaviorSubject<IMusicProduct[]>([]);
  public loaded$ = new BehaviorSubject<boolean>(false);

  public filteredProducts$ = combineLatest([
    this.productsSubject.asObservable(),
    this.productTypeSelector.type$
  ]).pipe(
    map(([products, selectedType]) =>
      products.filter(p => p.getType() === selectedType)
    )
  );

  constructor(
    private productTypeSelector: ProductTypeSelectorService,
  ) {}

  public addProduct(item: any): void {
    try {
      const product = MusicProductFactory.createProduct(item);
      console.log('Product created:', product);
      this.products.push(product);
      this.productsSubject.next(this.products); // оновлюємо BehaviorSubject
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

      this.productsSubject.next(this.products); // передаємо список
      this.loaded$.next(true);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }
}
