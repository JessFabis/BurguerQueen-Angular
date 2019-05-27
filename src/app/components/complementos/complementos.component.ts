import { Component, OnInit } from '@angular/core';
import { ComplementosService,Complemento } from '../../servicios/complementos.service';
@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrls: ['./complementos.component.css']
})
export class ComplementosComponent implements OnInit {

    
  complementos:Complemento[]=[];

  constructor( private _complementosService:ComplementosService) {

    
   }

  ngOnInit() {

    this.complementos = this._complementosService.getComplementos();
    console.log(this.complementos);
  }

}