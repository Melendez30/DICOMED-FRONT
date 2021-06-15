import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ],
  
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  salir(){
   
    
    //ir al backend
    //usuario
    
this.router.navigate(['./auth'])

}


}
