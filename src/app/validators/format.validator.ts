import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function formatValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
  
      if (value == null || typeof value !== 'string') {
        return { format: true };
      }
      const isValid = /^[\w-]+$/.test(value);
      return isValid ? null : { format: true };
    };
  }
