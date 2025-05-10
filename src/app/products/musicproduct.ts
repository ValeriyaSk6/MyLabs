import { IMusicProduct } from './imusicproduct';

export abstract class MusicProduct implements IMusicProduct {
  private id: number;
  private name: string;
  private price: number;

  constructor(id: number, name: string, price: number) {
    if (id < 0) throw new Error('id < 0');
    if (price < 1) throw new Error('price < 1');
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getID(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  abstract getDetails(): string[];
  abstract getType(): string;
}
