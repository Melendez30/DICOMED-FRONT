import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { FinanzasComponent } from './pages/finanzas/finanzas.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SalidasComponent } from './pages/salidas/salidas.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { LogisticaComponent } from './pages/logistica/logistica.component';

const routes: Routes = [
      { path: 'productos', component: ProductosComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'compras', component: ComprasComponent },
      { path: 'almacen', component: AlmacenComponent },
      { path: 'finanzas', component: FinanzasComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'salidas', component: SalidasComponent },
      { path: 'entradas', component: EntradasComponent },
      { path: 'logistica', component: LogisticaComponent},
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
export class InventarioRoutingModule { }
