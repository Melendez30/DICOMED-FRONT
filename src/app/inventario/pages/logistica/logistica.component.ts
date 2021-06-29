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
  };
  proceso;
  respuesta = {
    codigo: '',
    detalle: '',
    mensaje: ''
  }
  documentosPosibles = [];
  @ViewChild('myModal2') public myModal2: ModalDirective;
  @ViewChild('r') public r: ModalDirective;

  statusForm = new FormGroup({
    id_salida_status: new FormControl(0),
    id_salida: new FormControl(0),
    status: new FormControl('EN CAMINO', [Validators.required])
  });

  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
    this.listaSalidas();
    this.consultardocumentosPosibles();
  }

  consultardocumentosPosibles(){
    this.inventarioService.consultarDocumentosPosibles().subscribe({
      next:(res: any) => {
        this.documentosPosibles = res;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {

      }
    });
  }

  cambiarStatus(){
    // let json = {
    //   id_salida_status: this.statusForm.get('id_salida_status').value,
    //   status: this.statusForm.get('status').value
    // }
    this.inventarioService.cambiarStatus(this.statusForm.value).subscribe({
      next:(res: any) => {
        this.respuesta = res;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {
        if(this.respuesta.codigo == 'OK'){
          this.verStatus(this.statusForm.get('id_salida').value);
        }
        this.r.show();
      }
    });
  }

  cleanClass(){
    $('#status-tab').removeClass('isDisabled');    
    $('#documentos-tab').removeClass('isDisabled');    
  }

  consultarStatus(id_salida){
    let json = {
      id_salida: id_salida
    };
    this.inventarioService.consultarStatus(json).subscribe({
      next:(res: any) => {
        this.statusForm.patchValue(res);
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {
        
      }
    });
  }
  
  verStatus(id_salida){
    let json = {
      id_salida: id_salida
    }
    this.inventarioService.consultarStatusSalida(json).subscribe({
      next:(resp: any) => {
        this.proceso = resp;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {
        this.cleanClass();
        if(this.proceso.id_cat_logistica == 1){
          $('#status-tab').tab('show');
          $('#documentos-tab').addClass('isDisabled');
        }
        if(this.proceso.id_cat_logistica == 2){
          $('#documentos-tab').tab('show');
          $('#status-tab').addClass('isDisabled');
        }
        if(this.proceso.id_cat_logistica == null || undefined){

        }
        this.myModal2.show();
      }
    })
  }
  
  verSalida(event){
    this.salida = event.data;
    this.verStatus(event.data.id_salida);
    this.consultarStatus(event.data.id_salida);
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
