import { MusicProduct } from './musicproduct';

export class Vinyl extends MusicProduct {
  private artist: string;
  private year: number;
  private rpm: number;

  constructor(id: number, name: string, price: number, artist: string, year: number, rpm: number) {
    super(id, name, price);
    this.artist = artist;
    this.year = year;
    this.rpm = rpm;
  }

  getArtist(): string {
    return this.artist;
  }

  getYear(): number {
    return this.year;
  }

  getRPM(): number {
    return this.rpm;
  }

  override getDetails(): string[] {
    return [
      `Виконавець: ${this.artist}`,
      `Рік: ${this.year}`,
      `Швидкість обертання: ${this.rpm} об/хв`
    ];
  }

  override getType(): string {
    return 'Vinyl';
  }
}
