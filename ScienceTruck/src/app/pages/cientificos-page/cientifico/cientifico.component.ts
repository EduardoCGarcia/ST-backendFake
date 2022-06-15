import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cientifico',
  templateUrl: './cientifico.component.html',
  styleUrls: ['./cientifico.component.scss']
})
export class CientificoComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
    this.data.videoYT = this.data.cientifico.video;
  }

}
