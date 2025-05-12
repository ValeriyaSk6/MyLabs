import { AbstractControl, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const value = control.value;
    if (!value) return { name: true };
    const firstCharValid = /^[A-Z0-9]/.test(value);
    const forbiddenChars = /[.,\/\?\|\\!\(\[\{<\)\]\}>@#\^\*\+\%]/;
    return firstCharValid && !forbiddenChars.test(value) ? null : { name: true };
  };
}
