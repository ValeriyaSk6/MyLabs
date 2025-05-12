import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorYearService } from './year-validator.service';

export function yearValidator(): ValidatorFn {
  const service = new ValidatorYearService();
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const value = control.value;
    const valid = value && service.validate_year(value);
    return valid ? null : { year: true };
  };
}
