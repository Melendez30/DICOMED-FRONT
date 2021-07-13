import { Component, ViewChild, OnInit } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventarioService } from '../../services/inventario.service';

declare var $:any;


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: [
  "./agregar.component.css",
  ]
})
export class AgregarComponent implements OnInit {

    nombre = '';
    temporal;
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
        

      // caducidad: {
      //   title: 'Caducidad',
      //   editable:false
      // },

      // ubicacion: {
      //     editable:false
      //    },
     
      },
      actions:{
        custom:[
          // {
          //   name:'Editar', title:'Editar'
          // },

          // {
          //   name:'Eliminar', title:'  Eliminar '
          // }
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

    crearProductoForm = new FormGroup({
      id_articulo: new FormControl(0),
      nombre: new FormControl('', [Validators.required]),
      codigo_barras: new FormControl('', [Validators.required]),
      laboratorio: new FormControl('', [Validators.required]),
      lote: new FormControl('', [Validators.required]),
      caducidad: new FormControl('', [Validators.required]),
      ubicacion: new FormControl('', [Validators.required]),
      clave_imss: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required])

    });

    @ViewChild('myModal') public myModal: ModalDirective;
    articulos = [];
    productos = [];
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
    //this.consultararticulos();
    this.consultarProductos();
  }

  consultarProductos(){
    this.inventarioService.consultaproductos().subscribe({
      next: (productos: any) => {
        this.productos = productos;
        console.log(this.productos);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {

      }
    });
  }

  tomarDatos(){
    if(this.crearProductoForm.invalid){
      this.respuesta.mensaje = 'ALGUNO DE LOS DATOS INGRESADOS SON INVÁLIDOS O ESTAN VACIOS';
      this.myModal.show();
  //     complete:()=>{
  //      this.consultarProductos();     
  //     this.crearProducto.reset();
  // }
    }else{
      this.altaProductos();
    }
  }

  altaProductos(){
    this.inventarioService.altaproducto(this.crearProductoForm.value).subscribe({
      next: (res: any) => {
        this.respuesta = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        if(this.respuesta.codigo == 'OK'){
          this.consultarProductos();
          this.crearProductoForm.reset();
        }
        this.myModal.show();
      }
    });
  }

  // consultararticulos(){
  //   this.inventarioService.listaarcticulos().subscribe({
  //     next:(articulos: any)=>{
  //       this.articulos=articulos;
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }

}
