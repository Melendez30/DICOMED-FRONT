import { NgModule } from '@angular/core';
import { PantallaprincipalRoutingModule } from './pantallaprincipal-routing.module';

import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CompraComponent } from './pages/compra/compra.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';



@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    CompraComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    PantallaprincipalRoutingModule
  ]
})
export class PantallaprincipalModule { }
