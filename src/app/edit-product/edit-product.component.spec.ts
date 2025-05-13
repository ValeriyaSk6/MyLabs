import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditProductComponent } from './edit-product.component';
import { IMusicProduct } from '../products/imusicproduct';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EditProductComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;

    component.product = {
      getName: () => 'Test Product',
      getPrice: () => 99,
      getType: () => 'CD',
    } as IMusicProduct;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
