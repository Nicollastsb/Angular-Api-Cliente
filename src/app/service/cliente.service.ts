import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/interface/cliente.interface';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private readonly apiUrl: string = "https://localhost:7269/api/Cliente/"

  constructor(private http: HttpClient) { }

  getClientes():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl)
  }

  getCliente(id: string):Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}${id}`)
  }
  
  postCliente(client: Cliente) {
    return this.http.post(`${this.apiUrl}`,client)
  }
  
  putCliente(client: Cliente) {
    debugger
    return this.http.put(`${this.apiUrl}`,client)
  }
  
  deleteCliente(id: string) {
    return this.http.delete<Cliente>(`${this.apiUrl}${id}`)
  }
}
