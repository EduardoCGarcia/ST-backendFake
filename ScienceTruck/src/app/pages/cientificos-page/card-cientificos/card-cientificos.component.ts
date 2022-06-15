import { Component, Input, OnInit } from '@angular/core';
import { Cientifico } from 'src/app/interfaces/cientifico.interface';
import { CientificoService } from 'src/app/service/cientifico.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-card-cientificos',
  templateUrl: './card-cientificos.component.html',
  styleUrls: ['./card-cientificos.component.scss']
})
export class CardCientificosComponent implements OnInit {

  @Input() cientifico!:Cientifico;
  
  /*@Output() eventoDivulgador = new EventEmitter<Divulgador>() */
  constructor(
    public cientificoSvc:CientificoService,
    private dataCientificoSvc:DataService
    ) { }

  ngOnInit(): void {
  }
  
  /* 
  // Evento que hara el cambio en la variable del componente padre
  emitirDivulgador(){
    this.eventoDivulgador.emit(this.divulgador);
  } */

  emitirCientifico(){
    this.dataCientificoSvc.cientifico=this.cientifico;
  } 

}
