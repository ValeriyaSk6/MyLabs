export abstract class Equipment{
    name: string;
    weight: number;
    material: string;
    constructor(n: string, w: number, m: string){
        this.name = n;
        this.weight = w;
        this.material = m;
    }

    getWeight(){
        return this.weight;
    }

    displayInfo(): string{
        return `Ім'я: ${this.name}; \nВага: ${this.weight}; \nМатеріал: ${this.material}`
    }
}