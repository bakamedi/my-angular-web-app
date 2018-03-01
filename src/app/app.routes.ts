import { RouterModule, Routes } from '@angular/router';

import { LoginRegisterPageComponent } from './views/login-register-page/login-register-page.component';
import { BlogHomeComponent } from './views/blog-home/blog-home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoginGuard } from './guards/login.guard';
import { PostIndividualComponent } from './views/post-individual/post-individual.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';

const appRoutes: Routes = [
    {path: 'inicio/perfil', component: PerfilUsuarioComponent, canActivate: [AuthGuardGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'inicio/post', component: PostIndividualComponent, canActivate: [AuthGuardGuard]},
    {path: 'inicio', component: BlogHomeComponent, canActivate: [AuthGuardGuard]},
    {path: '**' , pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(appRoutes);
