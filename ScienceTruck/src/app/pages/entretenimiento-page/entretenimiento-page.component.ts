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
  
  videoJS!:VideoYT[];
  videoQU!:VideoYT[];
  

  constructor(public dataSvc:DataService,
    public youtubeSvc:YoutubeVideosService) { 
  }

  ngOnInit(): void {
    this.youtubeSvc.getVideosJS()
      .pipe(
        tap((video: VideoYT[]) => this.videoJS = video)
      )
      .subscribe()

    this.youtubeSvc.getVideosQU()
      .pipe(
        tap((video: VideoYT[]) => this.videoQU = video)
      )
      .subscribe()
    

      
  }

  

}
