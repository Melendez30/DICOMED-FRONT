import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [`
    .container {
      margin: 10px
    }
    `]
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
