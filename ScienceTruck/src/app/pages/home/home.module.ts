import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EntretenimientoPageModule } from '../entretenimiento-page/entretenimiento-page.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EntretenimientoPageModule,
    ComponentsModule
  ]
})
export class HomeModule { }
