import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorYearService {
  validate_year(value: string): boolean {
    if (!/^\d{4}$/.test(value)) return false;
    const year = parseInt(value, 10);
    const currentYear = new Date().getFullYear();
    return year >= 1800 && year <= currentYear;
  }
}
