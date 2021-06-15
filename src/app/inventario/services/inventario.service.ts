import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  protocolo='http';
  url = '192.168.0.14:3000'
  

    constructor(private http:HttpClient) { 
    }

      tablageneral(){
        return this.http.post(`${this.protocolo}://${this.url}/productos`, null);
      }


      registrarproducto(producto){
        return this.http.post(`${this.protocolo}://${this.url}/productos/agregar`, producto);
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


}
