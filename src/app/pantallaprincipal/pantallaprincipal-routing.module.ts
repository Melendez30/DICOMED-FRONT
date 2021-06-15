import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CompraComponent } from './pages/compra/compra.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';



const routes: Routes = [
      { path: 'inicio', component: InicioComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'compra', component: CompraComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: '**', redirectTo: 'inicio' }
    
  
];

@NgModule({
  //declarations: [],
  imports: [
    RouterModule.forChild( routes )
 ],
 exports: [
   RouterModule,
    
  ]
})
export class PantallaprincipalRoutingModule { }
