import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntretenimientoPageRoutingModule } from './entretenimiento-page-routing.module';
import { EntretenimientoPageComponent } from './entretenimiento-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    EntretenimientoPageComponent,
  ],
  imports: [
    CommonModule,
    EntretenimientoPageRoutingModule,
    ComponentsModule
  ]
})
export class EntretenimientoPageModule { }
