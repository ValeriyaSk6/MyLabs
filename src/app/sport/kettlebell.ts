import { Equipment } from './equipment';

export class Kettlebell extends Equipment {
    Color: string;

    constructor(n: string, w: number, m: string, c: string){
        super(n, w, m);
        if (w <= 0) {
            throw new Error("Weight must be positive!");
        }
        this.Color = c;
    }

    override displayInfo(): string {
        return `Ім'я: ${this.name}, Вага: ${this.weight} кг, Матеріал: ${this.material}, Колір: ${this.Color}`;
    }
}
