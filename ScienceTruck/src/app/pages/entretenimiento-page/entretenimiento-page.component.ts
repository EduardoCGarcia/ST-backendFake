import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-entretenimiento-page',
  templateUrl: './entretenimiento-page.component.html',
  styleUrls: ['./entretenimiento-page.component.scss']
})
export class EntretenimientoPageComponent implements OnInit {
  
  constructor(public dataSvc:DataService) { 
  }

  ngOnInit(): void {
    this.iniciarVideos();
  }

  iniciarVideos():void{
    this.dataSvc.videoYT="040mOkRx0Pk";
  }

}
