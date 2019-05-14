import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { DesayunoComponent } from './components/desayuno/desayuno.component';
import { HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { ComplementosComponent } from './components/complementos/complementos.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    DesayunoComponent,
    HamburguesasComponent,
    BebidasComponent,
    ComplementosComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
