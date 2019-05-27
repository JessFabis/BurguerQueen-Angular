import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {


  constructor(private _pedidoService:PedidoService) { }
    
    
  ngOnInit() {

  
    
    
   
  
  }

}
