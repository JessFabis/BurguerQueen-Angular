import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';
import { BebidasService,Bebida} from '../../servicios/bebidas.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  bebidaPedido:Bebida[]=[];

  constructor(private _pedidoService:PedidoService,
              private _bebidasService:BebidasService) { }
    
    pedido:number;
  ngOnInit() {

    this.pedido = this._pedidoService.bebida;
    
    
   
  
  }

}
