import { MusicProduct } from './musicproduct';

export class CD extends MusicProduct {
  private artist: string;
  private year: number;
  private tracks: number;

  constructor(id: number, name: string, price: number, artist: string, year: number, tracks: number) {
    super(id, name, price);
    this.artist = artist;
    this.year = year;
    this.tracks = tracks;
  }

  getArtist(): string {
    return this.artist;
  }

  getYear(): number {
    return this.year;
  }

  getTracks(): number {
    return this.tracks;
  }

  override getDetails(): string[] {
    return [
      `Виконавець: ${this.artist}`,
      `Рік: ${this.year}`,
      `Кількість треків: ${this.tracks}`
    ];
  }

  override getType(): string {
    return 'CD';
  }
}
