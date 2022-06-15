import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube/youtube.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    YoutubeComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports:[
    YoutubeComponent
  ]
})
export class ComponentsModule { }
