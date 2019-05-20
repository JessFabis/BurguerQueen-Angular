import { Injectable } from '@angular/core';

@Injectable()
export class DesayunoService {
    
    private desayuno:Desayuno[]= [
        {
        num: 1,
        name: "Sandwich de jamón y queso",
        price: 35,
        img:"assets/images/pan.png"
    },
    {
        num: 2,
        name: "Jugo Natura",
        price: 15,
        img:"assets/images/jugo.png"
    },
    {
        num: 3,
        name: "Café Americano",
        price: 20,
        img:"assets/images/taza-para-cafe.png"
    },
    {
        num: 4,
        name: "Café con Leche",
        price: 28,
        img:"assets/images/capuchino.png"
    }
    ];
    
    
    constructor (){
        console.log("Servicio listo para ocupar!")
    }
    
    getDesayuno():Desayuno[]{
       return this.desayuno;
    }
}

export interface Desayuno{
    num: number;
    name:string;
    price:number;
    img:string;

};