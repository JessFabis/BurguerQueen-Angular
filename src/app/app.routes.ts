import { RouterModule, Routes } from '@angular/router';
import { DesayunoComponent } from './components/desayuno/desayuno.component';
import { HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { ComplementosComponent } from './components/complementos/complementos.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { CancelarComponent } from './components/cancelar/cancelar.component';


const APP_ROUTES:Routes =[
    {path: 'desayuno',component : DesayunoComponent},
    {path: 'hamburguesas',component : HamburguesasComponent},
    {path: 'bebidas',component : BebidasComponent},
    {path: 'complementos',component : ComplementosComponent},
    {path: 'confirmar',component : ConfirmarComponent},
    {path: 'cancelar',component : CancelarComponent},
    {path: '**', pathMatch: 'full', redirectTo:'desayuno'}
];

export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);


