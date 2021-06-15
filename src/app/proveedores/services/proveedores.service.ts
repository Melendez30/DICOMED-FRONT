import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http: HttpClient) { }
    //getClientes(){
  //  return this.http.get<Proveedor[]>('HTTP://localhost');

  //}
}
