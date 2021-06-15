import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  
  
    imagen:string = "assets/DICOMED.png"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  salir(){
   
    
    //ir al backend
    //usuario
    
this.router.navigate(['./auth'])

}
}
