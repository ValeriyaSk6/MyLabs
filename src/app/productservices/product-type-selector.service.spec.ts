import { TestBed } from '@angular/core/testing';

import { ProductTypeSelectorService } from './product-type-selector.service';

describe('ProductTypeSelectorService', () => {
  let service: ProductTypeSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTypeSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
