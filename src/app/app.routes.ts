import { RouterModule, Routes } from '@angular/router';

import { LoginRegisterPageComponent } from './views/login-register-page/login-register-page.component';
import { BlogHomeComponent } from './views/blog-home/blog-home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoginGuard } from './guards/login.guard';
import { PostIndividualComponent } from './views/post-individual/post-individual.component';

const appRoutes: Routes = [
    {path: 'login_registro', component: LoginRegisterPageComponent},
    {path: 'inicio/post', component: PostIndividualComponent, canActivate: [AuthGuardGuard]},
    {path: 'inicio', component: BlogHomeComponent, canActivate: [AuthGuardGuard]},
    {path: '**' , pathMatch: 'full', redirectTo: 'login_registro'}
];

export const app_routing = RouterModule.forRoot(appRoutes);
