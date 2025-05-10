import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
private xy = new Map();
  constructor(@Optional() private LogService: LogService) {}
  getTab(xs: number = -0.9, xn: number = 0.9, step: number = 0.1){
    this.xy.clear();
    let y = 0;
    while (xs <= xn){
      y = xs*xs < 1 ? this.getRecursion(xs) : NaN;
      this.xy.set(xs, y);
      if (this.LogService){
        this.LogService.write('x=' + xs.toFixed(2) + ' y=' + y.toFixed(4));
      }
      xs = parseFloat((xs + step).toFixed(5));
    }
    return this.xy;
  }
  getRecursion(x: number, mem: number = 1, sum: number = 1, min: number = 1e-12, n = 1): number {
    if (mem <= min && mem >= -min) return sum; 
    
    mem *= (1 - 2 * n) * x/(2 * n);
    return this.getRecursion(x, mem, sum + mem, min, n + 1);
  }
}
