import { Injectable } from '@angular/core';

@Injectable()
export class HamburguesasService {

     private hamburguesas: Hamburguesa []=[
    {
        num: 1,
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
        num: 2,
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
        num: 3,
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
        num: 4,
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
        num: 5,
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
        num: 6,
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
        num: 7,
        name: "Extra Queso",
        price: 15,
        img: "assets/images/queso.png",
        ingredientes: "null"
    },
    {
        num: 8,
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
        num: number;
        name: string;
        price: number;
        img: string;
        ingredientes:any;            
     }