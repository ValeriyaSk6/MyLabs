import { formatValidator } from './format.validator';
import { AbstractControl } from '@angular/forms';

describe('formatValidator', () => {
  const validatorFn = formatValidator();

  it('should pass with all lowercase letters', () => {
    const control = { value: 'vinyl' } as AbstractControl;
    expect(validatorFn(control)).toBeNull();
  });

  it('should pass with all uppercase letters', () => {
    const control = { value: 'CD' } as AbstractControl;
    expect(validatorFn(control)).toBeNull();
  });

  it('should pass with mixed case', () => {
    const control = { value: 'DigitalMusic' } as AbstractControl;
    expect(validatorFn(control)).toBeNull();
  });

  it('should fail if contains digits', () => {
    const control = { value: 'MP3Format' } as AbstractControl;
    expect(validatorFn(control)).toEqual({ format: true });
  });

  it('should fail if contains symbols', () => {
    const control = { value: 'Flac!' } as AbstractControl;
    expect(validatorFn(control)).toEqual({ format: true });
  });

  it('should fail if empty string', () => {
    const control = { value: '' } as AbstractControl;
    expect(validatorFn(control)).toEqual({ format: true });
  });

  it('should fail if null', () => {
    const control = { value: null } as AbstractControl;
    expect(validatorFn(control)).toEqual({ format: true });
  });

  it('should fail with spaces', () => {
    const control = { value: 'Digital Format' } as AbstractControl;
    expect(validatorFn(control)).toEqual({ format: true });
  });
});
