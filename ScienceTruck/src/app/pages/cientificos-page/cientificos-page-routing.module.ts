import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CientificosPageComponent } from './cientificos-page.component';

const routes: Routes = [{ path: '', component: CientificosPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CientificosPageRoutingModule { }
