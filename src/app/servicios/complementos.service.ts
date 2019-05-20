import { Injectable } from '@angular/core';

@Injectable()
export class ComplementosService {
    
    
    private complementos:Complemento[]= [
        {
        num: 1,
        name: "Papas a la Francesa",
        price: 15,
        img:"assets/images/papas.png"
    },
    {
        num: 2,
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
    num: number;
    name:string;
    price:number;
    img:string;

};
    
   