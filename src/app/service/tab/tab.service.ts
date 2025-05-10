import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private xy = new Map();
  constructor(@Optional() private LogService: LogService) {}
  getTab(xs: number = -0.9, xn: number = 0.9, step: number = 0.1){
    this.xy.clear();
    let y = 0;
    while (xs <= xn){
      y = 1/Math.sqrt(1+xs);
      this.xy.set(xs, y);
      if (this.LogService){
        this.LogService.write('x=' + xs.toFixed(2) + ' y=' + y.toFixed(4));
      }
      xs = parseFloat((xs + step).toFixed(5));
    }
    return this.xy;
  }
}
