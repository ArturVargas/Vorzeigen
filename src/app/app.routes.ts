import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './login/register.component';
import { NewEventComponent } from './pages/profile/new-event/new-event.component';
import { PerfilComponent } from './pages/profile/perfil/perfil.component';


const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
     },
    { path: 'profile', component: ProfileComponent,
      children: [
        { path: 'perfil', component: PerfilComponent },
        { path: 'eventonuevo', component: NewEventComponent },
        { path: '', redirectTo: '/perfil', pathMatch: 'full' }
      ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );


