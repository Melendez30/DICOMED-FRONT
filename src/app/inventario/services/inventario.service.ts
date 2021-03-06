import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  protocolo='http';
  url = 'localhost:3000'


    constructor(private http:HttpClient) { 
    }

      tablageneral(){
        return this.http.post(`${this.protocolo}://${this.url}/productos`, null);
      }


      registrarproducto(){
        return this.http.post(`${this.protocolo}://${this.url}/articulos/agregar`, null);
      }
      
      buscarproducto(){
        return this.http.post(`${this.protocolo}://${this.url}/productos/todos`, null);
      }

      eliminarproducto(id){
        return this.http.post(`${this.protocolo}://${this.url}/productos/eliminar`, id);
      }


      editarproducto(producto){
        return this.http.post(`${this.protocolo}://${this.url}/productos/actualizar`, producto);
      }
//////////////////////////////////////////////////////////////////////////////////////////////////

      registrarentrada(entrada){
        return this.http.post(`${this.protocolo}://${this.url}/entradas/agregar`, entrada);
      }

      entradastodos(){
        return this.http.post(`${this.protocolo}://${this.url}/entradas/todos`, null);
      }

      entradasactualizar(entrada){
        return this.http.post(`${this.protocolo}://${this.url}/entradas/actualizar`, entrada);
      }

      entradaseliminar(id){
        return this.http.post(`${this.protocolo}://${this.url}/entradas/eliminar`, id);
      }

///////////////////////////////////////////////////////////////////
      registrarsalida(salida){
        return this.http.post(`${this.protocolo}://${this.url}/salidas/agregar`, salida);
      }

      salidatodos(){
        return this.http.post(`${this.protocolo}://${this.url}/salidas/todos`, null);
      }

      salidaactualizar(salida){
        return this.http.post(`${this.protocolo}://${this.url}/salidas/actualizar`, salida);
      }

      salidaeliminar(id){
        return this.http.post(`${this.protocolo}://${this.url}/salidas/eliminar`, id);
      }


      buscarcodigobarras(codigo){
        return this.http.post(`${this.protocolo}://${this.url}/productos/codigo/buscar`, codigo);
      }

      pdf(){
        return this.http.post(`${this.protocolo}://${this.url}/pdf/tabla`, null);
      }



/************************************************************************************************************************/

      

      listaarcticulos(){
        return this.http.post(`${this.protocolo}://${this.url}/articulos`, null);
      }

      altaproducto(parametros){
        return this.http.post(`${this.protocolo}://${this.url}/productos/alta`, parametros);
      }

      consultaproductos(){
        return this.http.post(`${this.protocolo}://${this.url}/productos/listado`, null)
      }

      darEntrada(parametros){
        return this.http.post(`${this.protocolo}://${this.url}/productos/entrada/alta`, parametros);
      }

      consultarTablaGeneral(){
        return this.http.post(`${this.protocolo}://${this.url}/productos/general`, null);
      }

      darSalida(parametros){
        return this.http.post(`${this.protocolo}://${this.url}/productos/salida/alta`, parametros)
      }

      tablaEntradas(){
        return this.http.post(`${this.protocolo}://${this.url}/productos/entrada/lista`, null)
      }

      tablaSalidas(){
        return this.http.post(`${this.protocolo}://${this.url}/productos/salida/lista`, null)
      }

      consultarStatusSalida(parametro){
        return this.http.post(`${this.protocolo}://${this.url}/productos/logistica/proceso`, parametro)
      }

      consultarStatus(parametro){
        return this.http.post(`${this.protocolo}://${this.url}/productos/logistica/status`, parametro)
      }

      cambiarStatus(parametro){
        return this.http.post(`${this.protocolo}://${this.url}/productos/logistica/status/actualizar`, parametro)
      }

      consultarDocumentosPosibles(){
        return this.http.post(`${this.protocolo}://${this.url}/productos/logistica/documentos`, null)
      }

      consultarDocumentosSubidos(parametro){
        return this.http.post(`${this.protocolo}://${this.url}/productos/logistica/documentos/lista`, parametro)
      }

      subirDocumento(parametros){
        return this.http.post(`${this.protocolo}://${this.url}/productos/logistica/documentos/subir`, parametros);
      }
}
