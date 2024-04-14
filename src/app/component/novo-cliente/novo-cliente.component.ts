import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/interface/cliente.interface';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit{
  constructor(private router: Router, private clienteService: ClienteService){}

  cliente: Cliente;

  criarCliente(novoCliente: Cliente){
    console.log(novoCliente)
    this.clienteService.postCliente(novoCliente).subscribe(
      (response) => {
        this.router.navigate(['clientes']);
      }
    );
  }
  
  ngOnInit(): void {
    this.cliente = {
      id:'',
      nome:'',
      cpf:'',
      dataNascimento: new Date(),
      email: '',
      sexo: '',
      telefone: '',
      observacao: ''
    }
  }
}
