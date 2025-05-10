import { MusicProductFactory } from './musicproductfactory';
import { Vinyl } from './vinyl';
import { CD } from './cd';
import { DigitalMusic } from './digitalmusic';
import { MusicalInstrument } from './musicalinstrument';

describe('MusicProductFactory', () => {
  it('should create Vinyl', () => {
    const product = MusicProductFactory.createProduct({
      type: 'Vinyl',
      id: 1,
      name: 'Vinyl Album',
      price: 100,
      artist: 'Artist A',
      year: 2000,
      rpm: 45
    });
    expect(product).toBeInstanceOf(Vinyl);
  });

  it('should create CD', () => {
    const product = MusicProductFactory.createProduct({
      type: 'CD',
      id: 2,
      name: 'CD Album',
      price: 80,
      artist: 'Artist B',
      year: 2010,
      tracks: 10
    });
    expect(product).toBeInstanceOf(CD);
  });

  it('should create DigitalMusic', () => {
    const product = MusicProductFactory.createProduct({
      type: 'DigitalMusic',
      id: 3,
      name: 'Digital Song',
      price: 50,
      artist: 'Artist C',
      year: 2022,
      format: 'mp3'
    });
    expect(product).toBeInstanceOf(DigitalMusic);
  });

  it('should create MusicalInstrument', () => {
    const product = MusicProductFactory.createProduct({
      type: 'MusicalInstrument',
      id: 4,
      name: 'Guitar',
      price: 1000,
      instrumentType: 'String',
      brand: 'Fender',
      isElectronic: false
    });
    expect(product).toBeInstanceOf(MusicalInstrument);
  });

  it('should throw error for unknown type', () => {
    expect(() =>
      MusicProductFactory.createProduct({
        type: 'Unknown',
        id: 5,
        name: 'Fake',
        price: 0
      })
    ).toThrowError('Invalid product type');
  });
});
