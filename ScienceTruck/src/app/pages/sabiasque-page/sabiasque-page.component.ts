import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { VideoYT } from 'src/app/interfaces/video.interface';
import { DataService } from 'src/app/service/data.service';
import { YoutubeVideosService } from 'src/app/service/youtube-videos.service';
import videoJSON from 'src/assets/json/db.json'
@Component({
  selector: 'app-sabiasque-page',
  templateUrl: './sabiasque-page.component.html',
  styleUrls: ['./sabiasque-page.component.scss']
})
export class SabiasquePageComponent{
  videoSH : any = videoJSON.videos_SH;
}
/* export class SabiasquePageComponent implements OnInit {
  videoSH!:VideoYT[];
 
  constructor(public dataSvc:DataService,
    public youtubeSvc:YoutubeVideosService) { 
  }

  ngOnInit(): void {
    this.youtubeSvc.getVideosSH()
      .pipe(
        tap((video: VideoYT[]) => this.videoSH = video)
      )
      .subscribe()
  }

} */
