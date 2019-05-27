import { Injectable } from '@angular/core';

@Injectable()
export class ComplementosService {
    
    
    private complementos:Complemento[]= [
        {
        num: "uno",
        name: "Papas a la Francesa",
        price: 15,
        img:"assets/images/papas.png"
    },
    {
        num: "dos",
        name: "Aros de Cebolla",
        price: 15,
        img:"assets/images/aros.png"
    }
];

    
    constructor (){
        console.log("Servicio listo para ocupar!")
    }
    
    getComplementos():Complemento[]{
       return this.complementos;
    }
}
export interface Complemento{
    num: string;
    name:string;
    price:number;
    img:string;

};
    
   