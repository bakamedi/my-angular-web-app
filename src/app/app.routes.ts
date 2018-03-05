import { RouterModule, Routes } from '@angular/router';

import { BlogHomeComponent } from './views/blog-home/blog-home.component';
import { AuthGuard } from './guards/auth.guard';
import { PostIndividualComponent } from './views/post-individual/post-individual.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';

const appRoutes: Routes = [
    {path: 'inicio/perfil', component: PerfilUsuarioComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'inicio/post', component: PostIndividualComponent, canActivate: [AuthGuard]},
    {path: 'inicio', component: BlogHomeComponent, canActivate: [AuthGuard]},
    {path: '**' , pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(appRoutes);
