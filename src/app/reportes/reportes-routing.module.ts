import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';
import { CreacionComponent } from './pages/creacion/creacion.component';

const routes: Routes = [
      { path: 'seguimiento', component: SeguimientoComponent},
      { path: 'creacion', component:CreacionComponent},

];

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forChild( routes )  
  ],
  exports: [
    RouterModule
  ]
})
export class ReportesRoutingModule { }
