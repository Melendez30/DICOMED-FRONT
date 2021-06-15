import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})

export class ListadoComponent implements OnInit {

  //Para mostrar listado 
  //clientes: Cliente[] = [];

  constructor(private ClientesService: ProveedoresService) { }

  ngOnInit(): void {

    //HTTP
    //this.clientesService.getClientes()
    //.subscribe( resp => console.log( resp ));
  }

}
