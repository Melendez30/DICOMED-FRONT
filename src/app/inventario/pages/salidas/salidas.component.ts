import { Component, ViewChild, OnInit } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventarioService } from '../../services/inventario.service';

declare var $:any;


@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: [
  "./salidas.component.css",
  ]
})
export class SalidasComponent implements OnInit {
  
  settings2 = {
    columns: {
      codigo_barras: {
        title: 'Codigo Barras',
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
      cliente: {
        title: 'Cliente',
        editable:false
      },
      lote: {
        title: 'Lote',
        editable:false
      },
      caducidad: {
        title: 'Caducidad',
        editable:false
      },
      fecha_salida: {
        title: 'Fecha Salida',
        editable:false
      },
      piezas_salida: {
        title: 'Piezas Salida',
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
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('myModal2') public myModal2: ModalDirective;
  producto = {
    nombre: '',
    descripcion: '',
    id_producto: 0
  };
  respuesta = {
    codigo: '',
    detalle: '',
    mensaje: ''
  }
  salidaForm = new FormGroup({
    id_entrada: new FormControl(0),
    cliente: new FormControl('', [Validators.required]),
    piezas_salida: new FormControl(0, [Validators.required]),
    num_guia: new FormControl('', [Validators.required]),
    orden_compra: new FormControl('', [Validators.required]),
    recibidor: new FormControl('', [Validators.required])
  });
  entradas = [];
  entrada;
  salidas = [];

  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
    this.consultarProductos();
    this.listaSalidas();
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

  abrirProducto(event){
    this.entrada = event.data;
    this.salidaForm.get('id_entrada').patchValue(event.data.id_entrada);
    this.myModal.show();
  }

  darSalida(){
    this.inventarioService.darSalida(this.salidaForm.value).subscribe({
      next:(res: any) => {
        this.respuesta = res;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {
        if(this.respuesta.codigo == 'OK'){
          this.salidaForm.reset();
          this.consultarProductos();
        }
        this.myModal2.show();
      }
    });
  }

  tomarProductos(){
    if(this.salidaForm.invalid){
      this.respuesta.mensaje = 'ALGUNO DE LOS DATOS INGRESADOS SON INVÁLIDOS O ESTAN VACIOS';
      this.myModal2.show();
    }else{
      this.darSalida();
    }
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
