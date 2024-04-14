import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/interface/cliente.interface';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit{
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private clienteService: ClienteService){}

  cliente: Cliente;

  atualizarCliente(updatedCliente: Cliente){
    updatedCliente.id = this.cliente.id
    this.clienteService.putCliente(updatedCliente).subscribe(
      (response) => {
        this.router.navigate(['clientes']);
      }
    );
  }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
        this.clienteService.getCliente(params.get('id')!).subscribe(
          (response: Cliente) => {
            this.cliente = response
          }
        );
      });
  }
}
