import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/interface/cliente.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  arrayCliente: Cliente[];
  constructor(private clienteService: ClienteService){}

  deletarCliente(id: string){
    this.clienteService.deleteCliente(id).subscribe(
      (response) => {
        this.arrayCliente = this.removeObjectWithId(this.arrayCliente, id);
      }
    );
  }

  removeObjectWithId(arr: Cliente[], id: string):Cliente[]  {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    arr.splice(objWithIdIndex, 1);
    return arr;
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (result: Cliente[]) =>{
        this.arrayCliente = result
        console.log(result)
      }
    );
  }

}
