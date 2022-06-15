import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiasquePageRoutingModule } from './sabiasque-page-routing.module';
import { SabiasquePageComponent } from './sabiasque-page.component';
import { EntretenimientoPageModule } from '../entretenimiento-page/entretenimiento-page.module';


@NgModule({
  declarations: [
    SabiasquePageComponent
  ],
  imports: [
    CommonModule,
    SabiasquePageRoutingModule,
    EntretenimientoPageModule
  ]
})
export class SabiasquePageModule { }
