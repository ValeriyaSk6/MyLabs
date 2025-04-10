import { Equipment } from "./equipment";

export class Dumbbell extends Equipment {
    isAdjustable: boolean;
    constructor(n: string, w: number, m: string, a: boolean){
        super(n, w, m);
        this.isAdjustable = a;
    }

    override displayInfo(): string {
        return `Ім'я: ${this.name}, Вага: ${this.weight} кг, Матеріал: ${this.material}, Регульована: ${this.isAdjustable}`;
    }
}