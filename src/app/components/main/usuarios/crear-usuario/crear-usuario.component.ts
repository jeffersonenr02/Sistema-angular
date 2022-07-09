import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  
  sexo: any[] = ['Masculino', 'Femenino']
  formu: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, 
    private router: Router, private _snackBar: MatSnackBar) {
    this.formu = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }
  

  ngOnInit(): void {
  }

  agregarUsuario(){
    
    const user: Usuario = {
      usuario: this.formu.value.usuario,
      nombre: this.formu.value.nombre,
      apellido: this.formu.value.apellido,
      sexo: this.formu.value.sexo,
    }

    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/main/usuarios'])

    this._snackBar.open('El usuario fue agregado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
