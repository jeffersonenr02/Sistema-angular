import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'jeff', nombre: 'jefferson', apellido: 'nieto', sexo: 'masculino'},
    {usuario: 'Riggs', nombre: 'Gordon', apellido: 'Becker', sexo: 'masculino'},
    {usuario: 'mar', nombre: 'martha', apellido: 'lopez', sexo: 'femenino'},
    {usuario: 'john', nombre: 'jhonatan', apellido: 'gutierrez', sexo: 'masculino'},
    {usuario: 'Mcclain', nombre: 'Amparo', apellido: 'Butler', sexo: 'femenino'},
    {usuario: 'Mack', nombre: 'markos', apellido: 'Sloan', sexo: 'masculino'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
