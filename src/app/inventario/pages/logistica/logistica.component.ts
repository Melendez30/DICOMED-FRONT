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
  };

  settings3 ={
    columns:{
      num_guia:{
        title:'Número de guía',
        editable: false
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
  
  documentosPosibles = [];
  documentosSubidos = [];
  @ViewChild('myModal2') public myModal2: ModalDirective;
  @ViewChild('r') public r: ModalDirective;

  statusForm = new FormGroup({
    id_salida_status: new FormControl(0),
    id_salida: new FormControl(0),
    status: new FormControl('EN CAMINO', [Validators.required])
  });

  uploadForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    id_cat_documento: new FormControl(0),
    id_salida: new FormControl(0),
  });

  id_cat_doc = 0;
  id_salida = 0;

  constructor(
    private router: Router, 
    private inventarioService: InventarioService
    ) { }

  ngOnInit(): void {
    this.listaSalidas();
  }

  subirDocumento(){
    var formdata = new FormData();
    formdata.append('file', this.uploadForm.get('file').value);
    formdata.append('id_cat_documento', this.uploadForm.get('id_cat_documento').value);
    formdata.append('id_salida', this.uploadForm.get('id_salida').value);
    this.inventarioService.subirDocumento(formdata).subscribe({
      next:(res: any) => {
        this.respuesta = res;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {
        if(this.respuesta.codigo == 'OK'){
          this.verStatus(this.uploadForm.get('id_salida').value);
          this.consultardocumentosSubidos(this.uploadForm.get('id_salida').value);
          this.cleanClass();
        }
        this.r.show();
      }
    });
  }

  onFileSelect(event, id_cat_doc) {
    this.uploadForm.get('id_cat_documento').patchValue(id_cat_doc);
    this.uploadForm.get('id_salida').patchValue(this.proceso.id_salida);
    var name = event.target.files[0].name;
    if (name.slice(-4) == '.pdf') {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.uploadForm.get('file').setValue(file);
      }
    }
  }


  consultardocumentosSubidos(id_salida){
    let json = {
      id_salida: id_salida
    }
    this.inventarioService.consultarDocumentosSubidos(json).subscribe({
      next:(res: any) => {
        this.documentosSubidos = res;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {

      }
    });
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
    $('#cierre-tab').removeClass('isDisabled');    
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
          $('#cierre-tab').addClass('isDisabled');
        }
        if(this.proceso.id_cat_logistica == 2){
          $('#documentos-tab').tab('show');
          $('#status-tab').addClass('isDisabled');
          $('#cierre-tab').addClass('isDisabled');
        }
        if(this.proceso.id_cat_logistica == 3){
          $('#cierre-tab').tab('show');
          $('#documentos-tab').addClass('isDisabled');
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
    this.consultardocumentosSubidos(event.data.id_salida);
    this.consultarStatus(event.data.id_salida);
    this.consultardocumentosPosibles();
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
