import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntretenimientoPageComponent } from './entretenimiento-page.component';

const routes: Routes = [{ path: '', component: EntretenimientoPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntretenimientoPageRoutingModule { }
