import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  Entrar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'omega' && password == '1234'){
      //Entramos al menu principal
      this.fakeloading();
    } else {
      // lanzamos una alerta de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('usuario o contraseña ingresados son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeloading(){
    this.loading = true;
    //Redireccionamos al menu principal
    setTimeout(() => {
      this.router.navigate(['main']);
    }, 2000);
  }
  
}
