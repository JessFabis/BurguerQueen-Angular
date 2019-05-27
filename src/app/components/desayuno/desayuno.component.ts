import { Component, OnInit } from '@angular/core';
import { DesayunoService, Desayuno} from '../../servicios/desayuno.service';
import { PedidoService } from '../../servicios/pedido.service';


@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {
   
  desayuno:Desayuno[]=[];

  constructor( private _desayunoService:DesayunoService,
                private _pedidoService:PedidoService) {

    
   }

  ngOnInit() {

    this.desayuno = this._desayunoService.getDesayuno();
    console.log(this.desayuno);
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
  this.desayuno.forEach(element => {
    if(this.desayuno.indexOf(element) == index){
      this.thing=element;
      console.log(this.thing)
      this._pedidoService.paintProduct(this.thing);
    }
  })
}

}
