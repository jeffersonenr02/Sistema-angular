import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material/material.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    MainComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
    CrearUsuarioComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
