import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventarioService } from '../../services/inventario.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: [
  "./productos.component.css",
  ]
})
export class ProductosComponent implements OnInit {

  settings = {
    columns: {
      piezas_existencia: {
        title: 'Piezas Existencia',
        editable:false
      },
      nombre: {
        title: 'Nombre',
        editable:false
      },
      descripcion: {
        title: 'Descripción',
        editable:false
      },
      laboratorio: {
        title: 'Laboratorio',
        editable:false
      },
      clave_imss: {
        title: 'Clave IMSS',
        editable:false
      },
      lote: {
        title: 'Lote',
        editable:false
      },
      ubicacion: {
        title: 'Ubicación',
        editable:false
      },
   
    },
    actions:{
      custom:[
      ],
      columnTitle:'',
      add:false,
      edit:false,
      delete:false, position: "right"
    },
    pager:{
      perPage:5
      
    }, noDataMessage:"Sin datos disponibles"
  };

  entradas = [];

  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
    this.consultarProductos();
  }

  consultarProductos(){
    this.inventarioService.consultarTablaGeneral().subscribe({
      next:(entradas: any) => {
        this.entradas = entradas;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {

      }
    });
  }

}