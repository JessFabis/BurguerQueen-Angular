import { Component, OnInit } from '@angular/core';
import { BebidasService ,Bebida} from '../../servicios/bebidas.service';
@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

    
  bebidas:Bebida[]=[];

  constructor( private _bebidasService:BebidasService) {

    
   }

  ngOnInit() {

    this.bebidas = this._bebidasService.getBebidas();
    console.log(this.bebidas);
  }

}
