import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { PrincipalPage } from './pages/principal/principal.page';
import { DbService } from './services/db.service';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  { 
    path: 'principal', 
    loadComponent: () => import('./pages/principal/principal.page').then(m => m.PrincipalPage),
    canActivate: [DbService]
  },
];




