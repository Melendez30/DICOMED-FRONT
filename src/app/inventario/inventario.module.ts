import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InventarioRoutingModule } from './inventario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ComprasComponent } from './pages/compras/compras.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { FinanzasComponent } from './pages/finanzas/finanzas.component';
import { VentasComponent } from './pages/ventas/ventas.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SalidasComponent } from './pages/salidas/salidas.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { LogisticaComponent } from './pages/logistica/logistica.component';


@NgModule({
  declarations: [
    ComprasComponent,
    AlmacenComponent,
    FinanzasComponent,
    VentasComponent,
    InicioComponent,
    AgregarComponent,
    ProductosComponent,
    SalidasComponent,
    EntradasComponent,
    LogisticaComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InventarioRoutingModule,
    Ng2SmartTableModule
  ]
})
export class InventarioModule { }
