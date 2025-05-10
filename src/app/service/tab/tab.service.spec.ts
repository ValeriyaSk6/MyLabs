import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';
import { infinite } from 'ionicons/icons';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Tabulation on x=-0.6, y=1.5811', () => {
    let x = -0.6;
    let y = 1.5811;
    let xy = service.getTab();
    let y1: number = 1000;
    y1 = xy.get(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  })

  it('Tabulation on x=-1, should get infinity', () => {
    let x = -1;
    let y = Infinity;
    let xy = service.getTab(-1, -0.9, 0.1);
    let y1: number = 1000;
    y1 = xy.get(x);
    expect(y).toBe(y1);
  })

  it('Tabulation on x=-2, should get NaN', () => {
    let x = -2;
    let xy = service.getTab(-2, 0, 2);
    let y1: number = 1000;
    y1 = xy.get(x);
    expect(y1).toBeNaN();
  })
});
