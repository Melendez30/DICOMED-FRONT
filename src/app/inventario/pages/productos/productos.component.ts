import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventarioService } from '../../services/inventario.service';

declare var $:any;







@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: [
  "./productos.component.css",
  ]
})
export class ProductosComponent implements OnInit {

    nombre = '';
    temporal;
    settings = {
      columns: {
        piezas_almacen: {
          title: 'Piezas en almacen',
          editable:false
        },

        codigo_barras: {
          title: 'Código de barras',
          editable:false
        },
        
        producto: {
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

    busqueda = new FormGroup({ 
      busqueda:  new FormControl('', [Validators.required]), 
 });

  todosp=[];
  productostodos=[];

  bandera:boolean=true;

hi(){

}

  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
          this.buscarproducto();     
          this.consultartablageneral();
  }

abrirdetalles(event){
  console.log(event);
  this.nombre = event.data.nombre;
  this.temporal = event.data;
  this.productosDetalle.patchValue(event.data);
  // this.productosDetalle.get('eliminarproducto').value
  // this.productosDetalle.disable();
  $('#d').modal('show');
}

consultartablageneral(){
    this.inventarioService.tablageneral().subscribe({
      next:(rest: any) => {
        this.productostodos=rest
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.bandera=false
        console.log(this.productostodos);
      }
    })  
}


////////
  eliminarproducto(){
    let json={
      id:this.productosDetalle.get('id_producto').value
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
    this.inventarioService.registrarproducto(this.productos.value).subscribe({
      next:(rest: any) => {

      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
      this.buscarproducto();     
      this.productos.reset();
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
       
  }
    })
      
  }
////////

//  guardarproducto(){

  //}


///////
  salir(){
   
    
    //ir al backend
    //usuario
    
this.router.navigate(['./auth'])

}
}
