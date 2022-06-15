import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CientificosPageRoutingModule } from './cientificos-page-routing.module';
import { CientificosPageComponent } from './cientificos-page.component';
import { CardCientificosComponent } from './card-cientificos/card-cientificos.component';
import { CientificoComponent } from './cientifico/cientifico.component';
import { YoutubeComponent } from 'src/app/components/youtube/youtube.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    CientificosPageComponent,
    CardCientificosComponent,
    CientificoComponent,
    YoutubeComponent
  ],
  imports: [
    CommonModule,
    CientificosPageRoutingModule,
    YouTubePlayerModule
  ]
})
export class CientificosPageModule { }
