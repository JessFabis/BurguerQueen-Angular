import { Injectable } from '@angular/core';

@Injectable()
export class BebidasService {
    
    
    private bebidas:Bebida[]= [{
        num: "uno",
        name: "Refresco",
        price: 15,
        img:"assets/images/refresco.png"
    },
    {
        num:"dos",
        name: "Agua",
        price:10,
        img:"assets/images/agua.png"
    }
];
    
    
    constructor (){
        console.log("Servicio listo para ocupar!")
    }
    
    getBebidas():Bebida[]{
       return this.bebidas;
    }
}

export interface Bebida{
    num: string;
    name:string;
    price:number;
    img:string;

};
    
    
