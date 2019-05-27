import { Injectable } from '@angular/core';

@Injectable()
export class HamburguesasService {

     private hamburguesas: Hamburguesa []=[
    {
        num: "uno",
        name: "Sencila Res",
        price: 40,
        img:"assets/images/hamburguesa.png",
        ingredientes: [
            "lechuga",
            "jitomate",
            "pepinillo",
            "cebolla",
            "catsup",
            "mostaza",
            "mayonesa"
        ]
    },
    {
        num: "dos",
        name: "Doble Res",
        price: 55,
        img: "assets/images/hamdoble.png",
        ingredientes: [
            "lechuga",
            "jitomate",
            "pepinillo",
            "cebolla",
            "catsup",
            "mostaza",
            "mayonesa"
        ]
    },
    {
        num: "tres",
        name: "Sencilla Pollo",
        price:40,
        img: "assets/images/hamburguesa.png",
        ingredientes: [
            "lechuga",
            "jitomate",
            "pepinillo",
            "cebolla",
            "catsup",
            "mostaza",
            "mayonesa"
        ]
    },
    {
        num:"cuatro",
        name: "Doble Pollo",
        price: 55,
        img: "assets/images/hamdoble.png",
        ingredientes: [
            "lechuga",
            "jitomate",
            "pepinillo",
            "cebolla",
            "catsup",
            "mostaza",
            "mayonesa"
        ]
    },
    {
        num: "cinco",
        name: "Sencilla Vegetarina",
        price: 40,
        img: "assets/images/hamburguesa.png",
        ingredientes: [
            "lechuga",
            "jitomate",
            "pepinillo",
            "cebolla",
            "catsup",
            "mostaza",
            "mayonesa"
        ]
    },
    {
        num: "seis",
        name: "Doble Vegetariana",
        price: 55,
        img: "assets/images/hamdoble.png",
        ingredientes: [
            "lechuga",
            "jitomate",
            "pepinillo",
            "cebolla",
            "catsup",
            "mostaza",
            "mayonesa"
        ]

    },
    {
        num:"siete",
        name: "Extra Queso",
        price: 15,
        img: "assets/images/queso.png",
        ingredientes: "null"
    },
    {
        num: "ocho",
        name: "Huevo",
        price: 18,
        img: "assets/images/huevo.png",
        ingredientes:"null"
    }
];
    constructor(){
        console.log("servicio listo para ocuparse!")
    }

    getHamburguesas():Hamburguesa[]{
        return this.hamburguesas;
    }

}
    export  interface Hamburguesa{
        num: string;
        name: string;
        price: number;
        img: string;
        ingredientes:any;            
     }