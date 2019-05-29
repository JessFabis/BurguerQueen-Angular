import { Injectable } from '@angular/core';

@Injectable()
export class PedidoService {

  contador : number = 0;

  order: any=[] =[];

  constructor() { }

  public incrementValue(){
    console.log('Contador esta aumentando PRUEBA');
    this.contador++;
    console.log(this.contador);

  }

  public paintProduct(pedido){
    console.log('estoy sirviendo');
    this.order.push(pedido);
    console.log("checa",this.order);
  
  }
  public trash (index){
    this.order.forEach(element => {
      if (this.order.indexOf(element)=== index){
        this.order.splice(index,1);
        console.log(this.order);
      }
      
    });
  }
  
}
