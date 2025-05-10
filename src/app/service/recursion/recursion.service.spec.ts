import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Recursion on x=-0.6, y=1.5811', () => {
    let x = -0.6;
    let y = 1.5811;
    let xy = service.getTab();
    let y1: number = 1000;
    y1 = xy.get(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  })

  it('Recursion on x=-2, should get NaN', () => {
    let x = -2;
    let xy = service.getTab(-2, 0, 2);
    let y1: number = 1000;
    y1 = xy.get(x);
    expect(y1).toBeNaN();
  })
});
