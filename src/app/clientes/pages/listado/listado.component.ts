import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  //Para mostrar listado 
  //clientes: Cliente[] = [];


  constructor(private ClientesService: ClientesService) { }

  ngOnInit(): void {

    //HTTP SERVICIOS DE BACK END 
  /*this.clientesService.getClientes()
  .subscribe( clientes => this.clientes = clientes);
    
    }


  */}

}
