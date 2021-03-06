import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { AgregarComponent } from './pages/agregar/agregar.component'
import { BuscarComponent } from './pages/buscar/buscar.component'
import { ClienteComponent } from './pages/cliente/cliente.component'
import { ListadoComponent } from './pages/listado/listado.component'
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: ClienteComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  }
];

@NgModule({
  //declarations: [],
  imports: [
    RouterModule.forChild( routes )
 ],
 exports: [
   RouterModule,
   CommonModule
 ]
})
export class ClientesRoutingModule { }
