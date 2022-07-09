import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MainComponent } from './main.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path:'', component: InicioComponent},
    {path:'usuarios', component: UsuariosComponent},
    {path:'reportes', component: ReportesComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
