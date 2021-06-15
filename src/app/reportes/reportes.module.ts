import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReportesRoutingModule } from './reportes-routing.module'

import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';
import { CreacionComponent } from './pages/creacion/creacion.component';



@NgModule({
  declarations: [
    SeguimientoComponent,
    CreacionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReportesRoutingModule,
    Ng2SmartTableModule
  ]
})
export class ReportesModule { }
