import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'divulgadores', loadChildren: () => import('./pages/divulgadores-page/divulgadores-page.module').then(m => m.DivulgadoresPageModule) },
  { path: 'cientificos', loadChildren: () => import('./pages/cientificos-page/cientificos-page.module').then(m => m.CientificosPageModule) },
  { path: 'entretenimiento', loadChildren: () => import('./pages/entretenimiento-page/entretenimiento-page.module').then(m => m.EntretenimientoPageModule) },
  { path: 'sabias-que', loadChildren: () => import('./pages/sabiasque-page/sabiasque-page.module').then(m => m.SabiasquePageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
