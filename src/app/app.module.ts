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
import { BlogHomeComponent } from './views/blog-home/blog-home.component';
import { BlogHomeNavbarComponent } from './views/blog-home-navbar/blog-home-navbar.component';
import { BlogHomeFooterComponent } from './views/blog-home-footer/blog-home-footer.component';
import { BlogHomePostComponent } from './views/blog-home-post/blog-home-post.component';
import { PostComponent } from './views/post/post.component';
import { SideRightBarComponent } from './views/side-right-bar/side-right-bar.component';
import { ModalCreatePostComponent } from './views/modal-create-post/modal-create-post.component';

// Servicios
import { RegistroService } from './services/registro.service';
import { LoginService } from './services/login.service';
import { UsuarioService } from './services/usuario.service';
import { PostService } from './services/post.service';

// Guardias
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoginGuard } from './guards/login.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterPageComponent,
    LoginComponent,
    RegistroComponent,
    BlogHomeComponent,
    BlogHomeNavbarComponent,
    BlogHomeFooterComponent,
    BlogHomePostComponent,
    PostComponent,
    SideRightBarComponent,
    ModalCreatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    app_routing
  ],
  providers: [
    RegistroService,
    LoginService,
    UsuarioService,
    PostService,
    AuthGuardGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
