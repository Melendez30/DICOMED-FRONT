import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresRoutingModule } from './proveedores-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ProveedorComponent,
    InicioComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ]
})
export class ProveedoresModule { }
