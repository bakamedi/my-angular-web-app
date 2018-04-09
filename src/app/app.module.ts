import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Rutas
import { app_routing } from './app.routes';

// Componentes
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { BlogHomeComponent } from './views/blog-home/blog-home.component';
import { BlogHomeNavbarComponent } from './views/blog-home-navbar/blog-home-navbar.component';
import { BlogHomeFooterComponent } from './views/blog-home-footer/blog-home-footer.component';
import { PostComponent } from './views/post/post.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { AlertServiceComponent } from './views/alert-service/alert-service.component';
import { PostIndividualComponent } from './views/post-individual/post-individual.component';

// Servicios
import { RegistroService } from './services/registro.service';
import { LoginService } from './services/login.service';
import { UsuarioService } from './services/usuario.service';
import { PostService } from './services/post.service';
import { AlertService } from './services/alert.service';

// Guardias
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BlogHomeComponent,
    BlogHomeNavbarComponent,
    BlogHomeFooterComponent,
    PostComponent,
    PerfilUsuarioComponent,
    PostIndividualComponent,
    AlertServiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    app_routing
  ],
  providers: [
    RegistroService,
    LoginService,
    UsuarioService,
    AlertService,
    PostService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
