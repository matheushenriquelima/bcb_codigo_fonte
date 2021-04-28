import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Barbeiro from './models/Barbeiro.model';

@Injectable({
  providedIn: 'root'
})
export class BarbeiroService {

  constructor(private httpCliente: HttpClient) {}

  cadastrar(barbeiro: Barbeiro):Observable<Barbeiro> {
    return this.httpCliente.post<Barbeiro>("http//localhost:3001/barbeiro", barbeiro);
  }

  editar (cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>("http//localhost:3001/clientes", cliente);
  }
}
