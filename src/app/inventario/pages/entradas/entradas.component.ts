import { Component, ViewChild, OnInit } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventarioService } from '../../services/inventario.service';

declare var $:any;

@Component({
  selector: 'app-agregar',
  templateUrl: './entradas.component.html',
  styleUrls: [
  "./entradas.component.css",
  ]
})
export class EntradasComponent implements OnInit {

  settings = {
    columns: {
      codigo_barras: {
        title: 'Código de barras',
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

  settings2 = {
    columns: {
      codigo_barras: {
        title: 'Código de barras',
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
      proveedor:{
        title: 'Proveedor',
        editable:false
      },
      lote:{
        title: 'Lote',
        editable:false
      },
      caducidad:{
        title: 'Caducidad',
        editable:false
      },
      fecha_entrada:{
        title: 'Fecha de Entrada',
        editable:false
      },
      piezas_entrada: {
        title: 'Piezas de Entrada',
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
  productos = [];
  entradas = [];
  producto = {
    nombre: '',
    descripcion: '',
    id_producto: 0
  };
  entradaForm = new FormGroup({
    id_producto: new FormControl(0),
    piezas_entrada: new FormControl(0, [Validators.required]),
    proveedor: new FormControl('', [Validators.required]),
    folio_prov: new FormControl('', [Validators.required])
  });
  respuesta = {
    codigo: '',
    detalle: '',
    mensaje: ''
  }
  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
    this.consultarProductos();
    this.listaEntradas();
  }

  listaEntradas(){
    this.inventarioService.tablaEntradas().subscribe({
      next:(resp: any) => {
        this.entradas = resp;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {

      }
    });
  }

  tomarProductos(){
    if(this.entradaForm.invalid){
      this.respuesta.mensaje = 'ALGUNO DE LOS DATOS INGRESADOS SON INVÁLIDOS O ESTAN VACIOS';
      this.myModal2.show();
    }else{
      this.altaEntrada();
    }
  }

  altaEntrada(){
    this.inventarioService.darEntrada(this.entradaForm.value).subscribe({
      next:(res: any) => {
        this.respuesta = res;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {
        this.myModal2.show();
        if(this.respuesta.codigo == 'OK'){
          this.entradaForm.reset();
        }
      }
    });
  }

  abrirProducto(event){
    this.producto = event.data;
    this.entradaForm.get('id_producto').patchValue(this.producto.id_producto);
    this.myModal.show();
  }

  consultarProductos(){
    this.inventarioService.consultaproductos().subscribe({
      next:(productos: any) => {
        this.productos = productos;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {

      }
    });
  }


}
