import { Component, OnInit } from '@angular/core';
import { BebidasService ,Bebida} from '../../servicios/bebidas.service';
import { PedidoService} from '../../servicios/pedido.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

    
  bebidas:Bebida[]=[];

  constructor( private _bebidasService:BebidasService,
                private _pedidoService:PedidoService) {

    
   }

  ngOnInit() {
    
    this.bebidas = this._bebidasService.getBebidas();
    console.log(this.bebidas);
 
 

  }
  public incrementar(){
    console.log('metodo incrementar');
    this._pedidoService.incrementValue();
}

}

