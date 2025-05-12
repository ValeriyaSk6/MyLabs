import { AbstractControl, ValidatorFn } from '@angular/forms';

export function formatValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const value = control.value;
    return /^[A-Za-z]+$/.test(value) ? null : { format: true };
  };
}
