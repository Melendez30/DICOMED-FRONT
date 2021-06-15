import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
// import { NosotrosComponent } from './pages/nosotros/nosotros.component';



const routes: Routes = [
      { path: 'login', component: LoginComponent },
    //   { path: 'nosotros', component: NosotrosComponent },
      { path: '**', redirectTo: 'login' }
    
  
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
export class AuthRoutingModule { }
