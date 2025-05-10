import { MusicProduct } from './musicproduct';

export class MusicalInstrument extends MusicProduct {
  private instrumentType: string;
  private brand: string;
  private isElectronic: boolean;

  constructor(id: number, name: string, price: number, instrumentType: string, brand: string, isElectronic: boolean) {
    super(id, name, price);
    this.instrumentType = instrumentType;
    this.brand = brand;
    this.isElectronic = isElectronic;
  }

  getInstrumentType(): string {
    return this.instrumentType;
  }

  getBrand(): string {
    return this.brand;
  }

  isElectronicInstrument(): boolean {
    return this.isElectronic;
  }

  override getDetails(): string[] {
    return [
      `Тип інструмента: ${this.instrumentType}`,
      `Бренд: ${this.brand}`,
      `Електронний: ${this.isElectronic ? 'Так' : 'Ні'}`
    ];
  }

  override getType(): string {
    return 'MusicalInstrument';
  }
}
