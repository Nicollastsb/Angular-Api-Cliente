import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './component/clientes/clientes.component';
import { ClienteDetailComponent } from './component/cliente-detail/cliente-detail.component';
import { NovoClienteComponent } from './component/novo-cliente/novo-cliente.component';

const routes: Routes = [
  {path: 'clientes', component: ClientesComponent},
  {path: 'cliente/:id', component: ClienteDetailComponent},
  {path: 'novocliente', component: NovoClienteComponent},
  {path: '**', redirectTo: 'clientes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
