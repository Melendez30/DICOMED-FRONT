import { NgModule } from '@angular/core';
import {AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
// import { NosotrosComponent } from './pages/nosotros/nosotros.component';




@NgModule({
  declarations: [
    LoginComponent
   
  ],
  imports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }