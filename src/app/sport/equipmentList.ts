import { Equipment } from "./equipment";
import { Barbell } from "./barbell";
import { Dumbbell } from "./dumbbell";
import { Kettlebell } from "./kettlebell"; 

export class EquipmentList {
    eqList: Equipment[];
    constructor(){
        this.eqList = [];
    }

    addEquipment(type: string, n: string, w: number, m: string, atr: any){
        if (type == "Barbell"){
            this.eqList.push(new Barbell(n, w, m, atr));
        }
        else if (type == "Dumbbell"){
            this.eqList.push(new Dumbbell(n, w, m, atr));
        }
        else if (type == "Kettlebell"){ 
            this.eqList.push(new Kettlebell(n, w, m, atr));
        }
        else {
            throw new Error(`Unknown equipment type: ${type}`);
        }
    }
}
