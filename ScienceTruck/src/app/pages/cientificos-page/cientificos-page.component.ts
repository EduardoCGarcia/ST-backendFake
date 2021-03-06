import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Cientifico } from 'src/app/interfaces/cientifico.interface';
import { CientificoService } from 'src/app/service/cientifico.service';
import cientificosJSON from 'src/assets/json/db.json'

@Component({
  selector: 'app-cientificos-page',
  templateUrl: './cientificos-page.component.html',
  styleUrls: ['./cientificos-page.component.scss']
})
export class CientificosPageComponent  {

  cientificos : any = cientificosJSON.Cientificos;


}
/* export class CientificosPageComponent implements OnInit {

  cientificos !: Cientifico[];

  constructor(private cientificosSvc: CientificoService) { }

  ngOnInit(): void {
    this.cientificosSvc.getCientifico()
      .pipe(
        tap((cientificos: Cientifico[]) => this.cientificos = cientificos)
      )
      .subscribe()
  }

} */
