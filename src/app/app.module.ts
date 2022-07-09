import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importacion de los componentes de la aplicacion
import { LoginComponent } from './components/login/login.component';

//Importacion de los modulos de angular material
import { MaterialModule } from './components/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
