import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private LogService: LogService) {}
  getTab(xs: number = -0.9, xn: number = 0.9, step: number = 0.1){
    this.xy.clear();
    let y = 0;
    while (xs <= xn){
      y = xs*xs < 1 ? this.getSeries(xs) : NaN;
      this.xy.set(xs, y);
      if (this.LogService){
        this.LogService.write('x=' + xs.toFixed(2) + ' y=' + y.toFixed(4));
      }
      xs = parseFloat((xs + step).toFixed(5));
    }
    return this.xy;
  }
  getSeries(x: number){
      let sum = 1,
      min = 1e-12,
      mem = 1,
      n = 1;
      do {
        mem *= (1 - 2 * n) * x/(2 * n);
        sum += mem;
        n++;
      } while (mem > min || mem < -min)
        return sum;
  }
}
