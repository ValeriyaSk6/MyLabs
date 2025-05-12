import { nameValidator } from './name.validator';
import { AbstractControl } from '@angular/forms';

describe('nameValidator', () => {
  const validatorFn = nameValidator();

  it('should pass with valid name starting with a capital letter', () => {
    const control = { value: 'ProductName' } as AbstractControl;
    expect(validatorFn(control)).toBeNull();
  });

  it('should pass with name starting with a number', () => {
    const control = { value: '1Product' } as AbstractControl;
    expect(validatorFn(control)).toBeNull();
  });

  it('should fail if name starts with a lowercase letter', () => {
    const control = { value: 'product' } as AbstractControl;
    expect(validatorFn(control)).toEqual({ name: true });
  });

  it('should fail if name contains forbidden punctuation marks', () => {
    const control = { value: 'Bad.Name!' } as AbstractControl;
    expect(validatorFn(control)).toEqual({ name: true });
  });

  it('should fail if name is empty', () => {
    const control = { value: '' } as AbstractControl;
    expect(validatorFn(control)).toEqual({ name: true });
  });

  it('should fail if name is null', () => {
    const control = { value: null } as AbstractControl;
    expect(validatorFn(control)).toEqual({ name: true });
  });

  it('should pass with alphanumeric name', () => {
    const control = { value: 'Product123' } as AbstractControl;
    expect(validatorFn(control)).toBeNull();
  });

  it('should fail with special characters in the middle', () => {
    const control = { value: 'Pro@duct' } as AbstractControl;
    expect(validatorFn(control)).toEqual({ name: true });
  });
});
