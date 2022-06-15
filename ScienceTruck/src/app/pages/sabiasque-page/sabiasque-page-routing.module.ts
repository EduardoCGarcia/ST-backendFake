import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SabiasquePageComponent } from './sabiasque-page.component';

const routes: Routes = [{ path: '', component: SabiasquePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabiasquePageRoutingModule { }
