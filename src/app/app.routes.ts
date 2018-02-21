import { RouterModule, Routes } from '@angular/router';

import { LoginRegisterPageComponent } from './views/login-register-page/login-register-page.component';

const appRoutes: Routes = [
    {path: 'login_registro', component: LoginRegisterPageComponent},
    {path: '**' , pathMatch: 'full', redirectTo: 'login_registro'}
];

export const app_routing = RouterModule.forRoot(appRoutes);