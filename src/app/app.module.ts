import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Rutas
import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';

//Componentes
import { LoginRegisterPageComponent } from './views/login-register-page/login-register-page.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterPageComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
