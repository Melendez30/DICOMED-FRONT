import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component'
import { BuscarComponent } from './pages/buscar/buscar.component'
import { ProveedorComponent } from './pages/proveedor/proveedor.component'
import { ListadoComponent } from './pages/listado/listado.component'
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes =[
  
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: ProveedorComponent },
      { path: '**', redirectTo: 'listado' }

];

@NgModule({
  //declarations: [],
  imports: [
    RouterModule.forChild( routes )
    
  ],
  exports: [
   RouterModule
 ]
})
export class ProveedoresRoutingModule { }
