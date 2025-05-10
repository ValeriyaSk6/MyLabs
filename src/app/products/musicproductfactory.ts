import { IMusicProduct } from './imusicproduct';
import { Vinyl } from './vinyl';
import { CD } from './cd';
import { DigitalMusic } from './digitalmusic';
import { MusicalInstrument } from './musicalinstrument';

export type MusicProductType = 'Vinyl' | 'CD' | 'DigitalMusic' | 'MusicalInstrument';

export const productType: ReadonlyArray<MusicProductType> = [
  'Vinyl',
  'CD',
  'DigitalMusic',
  'MusicalInstrument'
];

export class MusicProductFactory {
  static createProduct(data: any): IMusicProduct {
    switch (data.type) {
      case productType[0]:
        return new Vinyl(data.id, data.name, data.price, data.artist, data.year, data.rpm);
      case productType[1]:
        return new CD(data.id, data.name, data.price, data.artist, data.year, data.tracks);
      case productType[2]:
        return new DigitalMusic(data.id, data.name, data.price, data.artist, data.year, data.format);
      case productType[3]:
        return new MusicalInstrument(data.id, data.name, data.price, data.instrumentType, data.brand, data.isElectronic);
      default:
        throw new Error('Invalid product type');
    }
  }
}
