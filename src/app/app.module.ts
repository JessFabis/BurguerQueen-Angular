import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios
import { DesayunoService } from './servicios/desayuno.service';
import { HamburguesasService } from './servicios/hamburguesas.service';
import { BebidasService } from './servicios/bebidas.service';
import { ComplementosService } from './servicios/complementos.service';
import { PedidoService } from './servicios/pedido.service';




//Componentes
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { DesayunoComponent } from './components/desayuno/desayuno.component';
import { HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { ComplementosComponent } from './components/complementos/complementos.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { CancelarComponent } from './components/cancelar/cancelar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DesayunoComponent,
    HamburguesasComponent,
    BebidasComponent,
    ComplementosComponent,
    TicketComponent,
    CancelarComponent,
    ConfirmarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    DesayunoService,
    HamburguesasService,
    BebidasService,
    ComplementosService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
