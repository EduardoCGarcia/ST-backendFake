import { Component, Input, OnInit } from '@angular/core';
import { VideoYT } from 'src/app/interfaces/video.interface';
import { DataService } from 'src/app/service/data.service';
import { YoutubeVideosService } from 'src/app/service/youtube-videos.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() video!:VideoYT;

  constructor(public dataSvc:DataService,
    youtubeSvc:YoutubeVideosService) { }

  ngOnInit(): void {
  }

}
