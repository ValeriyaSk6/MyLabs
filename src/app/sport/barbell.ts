import { Equipment } from "./equipment";

export class Barbell extends Equipment{
    EqLength: number
    constructor(n: string, w: number, m: string, l: number){
        super(n, w, m);
        this.EqLength = l;
    }

    override displayInfo(): string {
        return `Ім'я: ${this.name}, Вага: ${this.weight} кг, Матеріал: ${this.material}, Довжина: ${this.EqLength}`;
    }
}