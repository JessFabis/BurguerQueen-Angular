import { Component, OnInit } from '@angular/core';
import { DesayunoService, Desayuno} from '../../servicios/desayuno.service';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {
   
  desayuno:Desayuno[]=[];

  constructor( private _desayunoService:DesayunoService) {

    
   }

  ngOnInit() {

    this.desayuno = this._desayunoService.getDesayuno();
    console.log(this.desayuno);
  }

}
