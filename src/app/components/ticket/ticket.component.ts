import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {


  constructor(private _pedidoService:PedidoService) { }

  inicial:number=0;
  adding:number;

 totalPay(arreglo:any[]){
   if(arreglo.length != this.inicial){
    this.adding=0;
     for(let total of arreglo)
      this.adding += total.price;
      console.log(this.adding);
       return this.adding;
   }
 };
 retornando(){
   return this._pedidoService.order;

 }
 getTrash(index){
   return this._pedidoService.trash(index);
 }

    
    
  ngOnInit() {

  
    
    
   
  
  }

}
