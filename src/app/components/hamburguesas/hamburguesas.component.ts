import { Component, OnInit } from '@angular/core';
import { HamburguesasService ,Hamburguesa } from '../../servicios/hamburguesas.service';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {
    
   hamburguesas: Hamburguesa[]=[];
    
  
  constructor( private _hamburguesasService:HamburguesasService,
                private _pedidoService:PedidoService) {
  
   }

  ngOnInit() {
    this.hamburguesas = this._hamburguesasService.getHamburguesas();

    console.log(this.hamburguesas);
    
  }

  thing:object;

  public add(){
    
    this._pedidoService.incrementValue();

}
public incrementar(){
  console.log('metodo incrementar');
  this._pedidoService.incrementValue();
}

public searchPedido( index ){
  this.hamburguesas.forEach(element => {
    if(this.hamburguesas.indexOf(element) == index){
      this.thing=element;
      console.log(this.thing)
      this._pedidoService.paintProduct(this.thing);
    }
  })
}

}
