import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './component/clientes/clientes.component';
import { ClienteDetailComponent } from './component/cliente-detail/cliente-detail.component';
import { FormsModule } from '@angular/forms';
import { NovoClienteComponent } from './component/novo-cliente/novo-cliente.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteDetailComponent,
    NovoClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DateValueAccessorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
