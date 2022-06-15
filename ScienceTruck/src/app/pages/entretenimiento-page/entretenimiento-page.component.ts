import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { VideoYT } from 'src/app/interfaces/video.interface';
import { DataService } from 'src/app/service/data.service';
import { YoutubeVideosService } from 'src/app/service/youtube-videos.service';
@Component({
  selector: 'app-entretenimiento-page',
  templateUrl: './entretenimiento-page.component.html',
  styleUrls: ['./entretenimiento-page.component.scss']
})
export class EntretenimientoPageComponent implements OnInit {
  
  video!:VideoYT[];

  constructor(public dataSvc:DataService,
    public youtubeSvc:YoutubeVideosService) { 
  }

  ngOnInit(): void {
    this.youtubeSvc.getVideos()
      .pipe(
        tap((video: VideoYT[]) => this.video = video)
      )
      .subscribe()

      //this.iniciarVideos()
  }

  iniciarVideos():void{
    this.dataSvc.videoYT="040mOkRx0Pk";
  }

}
