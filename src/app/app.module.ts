import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
// Rutas
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';

// Componentes
import { LoginRegisterPageComponent } from './views/login-register-page/login-register-page.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';

// Servicios
import { RegistroService } from './services/registro.service';

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
    RouterModule,
    HttpModule,
    app_routing
  ],
  providers: [
    RegistroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
