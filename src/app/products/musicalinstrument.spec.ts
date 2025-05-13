import { MusicalInstrument } from './musicalinstrument';

describe('MusicalInstrument', () => {
  let instrument: MusicalInstrument;

  beforeEach(() => {
    instrument = new MusicalInstrument(4, 'Yamaha Keyboard', 500, 'Keyboard', 'Yamaha', true);
  });

  it('should be created', () => {
    expect(instrument).toBeTruthy();
  });

  it('getInstrumentType', () => {
    expect(instrument.getInstrumentType()).toBe('Keyboard');
  });

  it('getBrand', () => {
    expect(instrument.getBrand()).toBe('Yamaha');
  });

  it('isElectronicInstrument', () => {
    expect(instrument.isElectronicInstrument()).toBe(true);
  });

  it('getType', () => {
    expect(instrument.getType()).toBe('MusicalInstrument');
  });

  it('getDetails', () => {
    expect(instrument.getDetails()).toEqual([
      'Тип інструмента: Keyboard',
      'Бренд: Yamaha',
      'Електронний: Так'
    ]);
  });
});
