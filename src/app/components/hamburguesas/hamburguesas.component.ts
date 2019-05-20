import { Component, OnInit } from '@angular/core';
import { HamburguesasService ,Hamburguesa } from '../../servicios/hamburguesas.service';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {
    
   hamburguesas: Hamburguesa[]=[];
    
  
  constructor( private _hamburguesasService:HamburguesasService) {
    console.log("constructor");
   }

  ngOnInit() {
    this.hamburguesas = this._hamburguesasService.getHamburguesas();

    console.log(this.hamburguesas);
    
  }

  

}
