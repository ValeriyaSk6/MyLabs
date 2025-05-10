import { CD } from './cd';

describe('CD', () => {
  let cd: CD;

  beforeEach(() => {
    cd = new CD(2, 'Thriller', 200, 'Michael Jackson', 1982, 9);
  });

  it('should be created', () => {
    expect(cd).toBeTruthy();
  });

  it('getTracks', () => {
    expect(cd.getTracks()).toBe(9);
  });

  it('getType', () => {
    expect(cd.getType()).toBe('CD');
  });

  it('getDetails', () => {
    expect(cd.getDetails()).toEqual([
      'Artist: Michael Jackson',
      'Year: 1982',
      'Tracks: 9'
    ]);
  });
});
