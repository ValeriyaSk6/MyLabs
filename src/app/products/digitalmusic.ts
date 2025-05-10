import { MusicProduct } from './musicproduct';

export class DigitalMusic extends MusicProduct {
  private artist: string;
  private year: number;
  private format: string;

  constructor(id: number, name: string, price: number, artist: string, year: number, format: string) {
    super(id, name, price);
    this.artist = artist;
    this.year = year;
    this.format = format;
  }

  getArtist(): string {
    return this.artist;
  }

  getYear(): number {
    return this.year;
  }

  getFormat(): string {
    return this.format;
  }

  override getDetails(): string[] {
    return [
      `Виконавець: ${this.artist}`,
      `Рік: ${this.year}`,
      `Формат: ${this.format}`
    ];
  }

  override getType(): string {
    return 'DigitalMusic';
  }
}
