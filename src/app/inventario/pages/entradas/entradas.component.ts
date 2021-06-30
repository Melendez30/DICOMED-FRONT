import { Component, OnInit } from '@angular/core';
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

    nombre = '';
    temporal;
    settings = {
      columns: {

        codigo_barras:{
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

        proveedor: {
          title: 'Proveedor',
          editable:false
        },

        folio_prov: {
          title: 'Folio', 
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

        fecha_entrada: {
          title: 'Fecha de entrada',
          editable:false
        },

        piezas_entrada: {
          title: 'Piezas de entrada',
          editable:false
        }
        
      },
      actions:{
       
          custom:[
            {
              name:'Editar', title:'Editar'
            },
  
            {
              name:'Eliminar', title:'  Eliminar '
            }
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


    // IMPORTANTE
    // Siempre que agregres nuevos campos al HTML, no olvidar agregarlos al formulario en el typescript, no no funciona!!
    // Entonces PRODUCTOS (FORMGROUP) TIENE QUE SER IGUAL A PRODUCTO DETALLES! 
    // OJO! SI EL BACKEND NO DEVUELVE LOS CAMPOS NECESARIOS O INCOMPLETOS EL FORMGROUP VA A MARCAR ERROR

    productos = new FormGroup({ 
      id_producto: new FormControl(0),
      piezas_almacen:  new FormControl('', [Validators.required]), 
      nombre:  new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      laboratorio: new FormControl('', [Validators.required]),
      lote: new FormControl('', [Validators.required]),
      caducidad: new FormControl('', [Validators.required]),
      clave_imss: new FormControl('', [Validators.required]),
      fecha_entrada: new FormControl ('', [Validators.required]),
      piezas_entrada: new FormControl ('', [Validators.required]),
      piezas_salida: new FormControl ('', [Validators.required]),
      proveedor: new FormControl ('', [Validators.required]),
      fecha_salida: new FormControl ('', [Validators.required]),
      numero_guia: new FormControl(''),
      codigo_barras: new FormControl(''),
      status: new FormControl(''),
      
  });

      productosDetalle = new FormGroup({ 
      id_entrada: new FormControl(0),
      nombre:  new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      laboratorio: new FormControl('', [Validators.required]),
      lote: new FormControl('', [Validators.required]),
      caducidad: new FormControl('', [Validators.required]),
      clave_imss: new FormControl('', [Validators.required]),
      fecha_entrada: new FormControl ('', [Validators.required]),
      piezas_entrada: new FormControl ('', [Validators.required]),
      proveedor: new FormControl ('', [Validators.required]),
      codigo_barras: new FormControl(''),
  });

    busqueda = new FormGroup({ 
      busqueda:  new FormControl('', [Validators.required]), 
 });

  todosp=[];
  banderaeditar:boolean=true;
        today = new Date();
        fecha = new Date().toISOString().substring(0, 10);
  bandera:boolean=true;


  productoscreados=[];


hi(){

}

  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
    this.entradaproductos(); 
  }

  entradaproductos(){
    this.inventarioService.entradaarcticulos().subscribe({
      next:(productoscreados: any)=>{
        this.productos=productoscreados;
        console.log(this.productoscreados);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


}
