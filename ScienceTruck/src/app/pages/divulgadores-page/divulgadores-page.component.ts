import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Divulgador } from 'src/app/interfaces/divulgador.interface';
import { DivulgadorService } from 'src/app/service/divulgador.service';
import divulgadoresJSON from 'src/assets/json/db.json'
@Component({
  selector: 'app-divulgadores-page',
  templateUrl: './divulgadores-page.component.html',
  styleUrls: ['./divulgadores-page.component.scss']
})
export class DivulgadoresPageComponent{

  divulgadores : any = divulgadoresJSON.divulgadores;
  


}
/* export class DivulgadoresPageComponent implements OnInit {

  divulgadores !: Divulgador[];
  
  //divulgador!:Divulgador; //es la variable en la que se guardara el valor que emita el componente hijo

  constructor(private divulgadoresSvc: DivulgadorService) { }

  ngOnInit(): void {
    this.divulgadoresSvc.getDivulgador()
      .pipe(
        tap((divulgadores: Divulgador[]) => this.divulgadores = divulgadores)
      )
      .subscribe()
  }

} */
