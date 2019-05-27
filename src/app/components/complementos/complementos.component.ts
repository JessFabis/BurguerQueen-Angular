import { Component, OnInit } from '@angular/core';
import { ComplementosService,Complemento } from '../../servicios/complementos.service';
import { PedidoService } from '../../servicios/pedido.service';
@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrls: ['./complementos.component.css']
})
export class ComplementosComponent implements OnInit {

    
  complementos:Complemento[]=[];

  constructor( private _complementosService:ComplementosService,
              private _pedidoService:PedidoService) {

    
   }

  ngOnInit() {

    this.complementos = this._complementosService.getComplementos();
    console.log(this.complementos);
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
  this.complementos.forEach(element => {
    if(this.complementos.indexOf(element) == index){
      this.thing=element;
      console.log(this.thing)
      this._pedidoService.paintProduct(this.thing);
    }
  })
}

}
