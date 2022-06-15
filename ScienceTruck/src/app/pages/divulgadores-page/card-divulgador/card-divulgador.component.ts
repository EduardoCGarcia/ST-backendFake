import { Component, Input, OnInit } from '@angular/core';
import { Divulgador } from 'src/app/interfaces/divulgador.interface';
import { DataService } from 'src/app/service/data.service';
import { DivulgadorService } from 'src/app/service/divulgador.service';

@Component({
  selector: 'app-card-divulgador',
  templateUrl: './card-divulgador.component.html',
  styleUrls: ['./card-divulgador.component.scss']
})
export class CardDivulgadorComponent implements OnInit {

  @Input() divulgador!:Divulgador;//esta es necesaria para manejar los datos entre el componente card y el principal
  /*@Output() eventoDivulgador = new EventEmitter<Divulgador>() */
  constructor(
    public divulgadorSvc:DivulgadorService,
    private dataDivulgadorSvc:DataService
    ) { }

  ngOnInit(): void {
  } 
   
  /*Evento que hara el cambio en la variable del componente padre*/
  /* emitirDivulgador(){
    this.eventoDivulgador.emit(this.divulgador);
  } */

  emitirDivulgador(){
    this.dataDivulgadorSvc.divulgador=this.divulgador;
  }  

}
