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
     for(let Total of arreglo)
      this.adding += Total.price;
      console.log(this.adding);
       return this.adding;
   }
 };
    
    
  ngOnInit() {

  
    
    
   
  
  }

}
