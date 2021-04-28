import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cliente from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  cadastrar (cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>("http//localhost:3001/clientes", cliente);
  }
}
