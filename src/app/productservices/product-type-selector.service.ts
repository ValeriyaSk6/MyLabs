import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productType, MusicProductType } from '../products/musicproductfactory'; // або звідки у тебе йде типізація

const DEFAULT_TYPE: MusicProductType = productType[0]; 

@Injectable({
  providedIn: 'root'
})
export class ProductTypeSelectorService {
  private typeSubject = new BehaviorSubject<MusicProductType>(DEFAULT_TYPE);
  type$ = this.typeSubject.asObservable();

  setType(type: MusicProductType) {
    this.typeSubject.next(type);
  }

  get CurrentType(): MusicProductType {
    return this.typeSubject.getValue();
  }
}
