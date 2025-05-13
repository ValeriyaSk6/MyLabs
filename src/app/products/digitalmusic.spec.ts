import { DigitalMusic } from './digitalmusic';

describe('DigitalMusic', () => {
  let dm: DigitalMusic;

  beforeEach(() => {
    dm = new DigitalMusic(3, 'Blinding Lights', 100, 'The Weeknd', 2020, 'mp3');
  });

  it('should be created', () => {
    expect(dm).toBeTruthy();
  });

  it('getFormat', () => {
    expect(dm.getFormat()).toBe('mp3');
  });

  it('getType', () => {
    expect(dm.getType()).toBe('DigitalMusic');
  });

  it('getDetails', () => {
    expect(dm.getDetails()).toEqual([
      'Виконавець: The Weeknd',
      'Рік: 2020',
      'Формат: mp3'
    ]);
  });
});
