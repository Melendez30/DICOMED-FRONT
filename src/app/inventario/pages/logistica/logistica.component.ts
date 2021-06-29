import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventarioService } from '../../services/inventario.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

declare var $:any;
// import * as $ from 'jquery';

@Component({
  selector: 'app-logistica',
  templateUrl: './logistica.component.html',
  styleUrls: [
    "./logistica.component.css",
  ]
})

export class LogisticaComponent implements OnInit {


  settings2 = {
    columns: {
      nombre: {
        title: 'Nombre',
        editable:false
      },
      descripcion: {
        title: 'Descripción',
        editable:false
      },
      cliente: {
        title: 'Cliente',
        editable:false
      },
      piezas_salida: {
        title: 'Piezas Salida',
        editable:false
      },
      fecha_salida: {
        title: 'Fecha Salida',
        editable:false
      },
      num_guia: {
        title: 'Numero de Guia',
        editable:false
      },
      orden_compra: {
        title: 'Orden de Compra',
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
  salidas = [];
  salida = {
    nombre: '',
    descripcion: ''
  }
  @ViewChild('myModal2') public myModal2: ModalDirective;
   

  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
    this.listaSalidas();
  }

  verSalida(event){
    this.salida = event.data;
    this.myModal2.show();
  }

  listaSalidas(){
    this.inventarioService.tablaSalidas().subscribe({
      next:(resp: any) => {
        this.salidas = resp;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {

      }
    });
  }

}
