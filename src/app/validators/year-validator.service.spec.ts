import { ValidatorYearService } from './year-validator.service';

describe('ValidatorYearService', () => {
  let service: ValidatorYearService;

  beforeEach(() => {
    service = new ValidatorYearService();
  });

  it('should validate year in correct range', () => {
    expect(service.validate_year('1999')).toBeTrue();
  });

  it('should reject year < 1800 or > current', () => {
    expect(service.validate_year('1700')).toBeFalse();
    expect(service.validate_year(String(new Date().getFullYear() + 1))).toBeFalse();
  });

  it('should reject invalid formats', () => {
    expect(service.validate_year('19a9')).toBeFalse();
    expect(service.validate_year('')).toBeFalse();
  });
});
