import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntretenimientoPageRoutingModule } from './entretenimiento-page-routing.module';
import { EntretenimientoPageComponent } from './entretenimiento-page.component';


@NgModule({
  declarations: [
    EntretenimientoPageComponent
  ],
  imports: [
    CommonModule,
    EntretenimientoPageRoutingModule
  ]
})
export class EntretenimientoPageModule { }
