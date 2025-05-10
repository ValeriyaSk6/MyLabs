import { Vinyl } from './vinyl';

describe('Vinyl', () => {
  let vinyl: Vinyl;

  beforeEach(() => {
    vinyl = new Vinyl(1, 'Dark Side of the Moon', 300, 'Pink Floyd', 1973, 33);
  });

  it('should be created', () => {
    expect(vinyl).toBeTruthy();
  });

  it('getArtist', () => {
    expect(vinyl.getArtist()).toBe('Pink Floyd');
  });

  it('getYear', () => {
    expect(vinyl.getYear()).toBe(1973);
  });

  it('getRPM', () => {
    expect(vinyl.getRPM()).toBe(33);
  });

  it('getType', () => {
    expect(vinyl.getType()).toBe('Vinyl');
  });

  it('getDetails', () => {
    expect(vinyl.getDetails()).toEqual([
      'Artist: Pink Floyd',
      'Year: 1973',
      'RPM: 33'
    ]);
  });
});
