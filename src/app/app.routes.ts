import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { LayoutComponent } from './layout/layout/layout';
import { UsersComponent } from './features/users/users';
import { authGuard } from './core/guards/auth-guard';
import { Login } from './auth/login/login';
import { NotFoundComponent } from './features/not-found-404/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
    ],
  },

  {
    path: 'login',
    component: Login,
  },

  {
    path: '**',
    redirectTo: '/not-found',
  },
];
