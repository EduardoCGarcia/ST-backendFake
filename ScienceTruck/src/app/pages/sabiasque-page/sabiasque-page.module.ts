import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiasquePageRoutingModule } from './sabiasque-page-routing.module';
import { SabiasquePageComponent } from './sabiasque-page.component';


@NgModule({
  declarations: [
    SabiasquePageComponent
  ],
  imports: [
    CommonModule,
    SabiasquePageRoutingModule
  ]
})
export class SabiasquePageModule { }
