import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntretenimientoPageRoutingModule } from './entretenimiento-page-routing.module';
import { EntretenimientoPageComponent } from './entretenimiento-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    EntretenimientoPageComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    EntretenimientoPageRoutingModule,
    ComponentsModule
  ],
  exports:[
    VideoComponent
  ]
})
export class EntretenimientoPageModule { }
