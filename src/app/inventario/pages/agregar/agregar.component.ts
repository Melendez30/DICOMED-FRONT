import { Component, OnInit } from '@angular/core';
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

        ubicacion: {
          title: 'Ubicación',
          editable:false
        },
     
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
       id_creacion: new FormControl(0),
      nombre:  new FormControl('', []),
      descripcion: new FormControl('', ),
      laboratorio: new FormControl('', []),
      lote: new FormControl('', []),
      caducidad: new FormControl('', []),
      clave_imss: new FormControl('', []),
      codigo_barras: new FormControl(''),
      ubicacion: new FormControl(''),
      
  });

    busqueda = new FormGroup({ 
      busqueda:  new FormControl('', [Validators.required]), 
 });

  todosp=[];
  banderaeditar:boolean=true;

  bandera:boolean=true;

hi(){

}

  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
          this.buscarproducto();     

  }

abrirdetalles(event){
  this.nombre = event.data.nombre;
  this.temporal = event.data;
  this.productosDetalle.patchValue(event.data);
  this.banderaeditar = false;
}

cancelaredicion(){
  this.productosDetalle.reset();
  this.banderaeditar=true;
}

acciones(event){
  switch(event.action){
    case "Editar":
      this.abrirdetalles(event)
      break;
    case "Eliminar":
      this.eliminarproducto(event)
      break;
    default: 
      break;
  }
}


////////
  eliminarproducto(event){
    let json={
      id: event.data.id_creacion
    }
        this.inventarioService.eliminarproducto(json).subscribe({
      next:(rest: any) => {
        console.log(rest)
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.buscarproducto();
      }
    }) 

  }

////////
buscarproducto(){
  this.bandera=true;
    this.inventarioService.buscarproducto().subscribe({
      next:(rest: any) => {
        this.todosp=rest
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.bandera=false
        console.log(this.todosp);
      }
    })  
    }


////////
  agregarproducto(){

    this.inventarioService.registrarproducto(this.productosDetalle.value).subscribe({
      next:(rest: any) => {
          console.log(rest);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
      this.buscarproducto();     
      this.productosDetalle.reset();
  }
    })
  }

  tomarproducto(producto){
    console.log(producto);
      this.productos.patchValue(producto);
  }

////////
  editarproducto(){
    this.inventarioService.editarproducto(this.productosDetalle.value).subscribe({
      next:(rest: any) => {
        console.log(rest)
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.buscarproducto()
       this.cancelaredicion()
  }
    })
      
  }
////////
codigobarras(){
  let json={
    codigo: this.productosDetalle.get("codigo_barras").value
  }
      this.inventarioService.buscarcodigobarras(json).subscribe({
    next:(rest: any) => {
      console.log(rest)
      this.productosDetalle.get("nombre").patchValue(rest[0].nombre);
      this.productosDetalle.get("clave_imss").patchValue(rest[0].clave_imss);
      this.productosDetalle.get("descripcion").patchValue(rest[0].descripcion);

    },
    error:(err)=>{
      console.log(err);
    },
    complete:()=>{
      
    }
  }) 

}
//  guardarproducto(){

  //}


///////
  salir(){
   
    
    //ir al backend
    //usuario
    
this.router.navigate(['./auth'])

}
}
