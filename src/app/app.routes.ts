import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { LayoutComponent } from './layout/layout/layout';
import { UsersComponent } from './features/users/users';
import { authGuard } from './core/guards/auth-guard';
import { Login } from './auth/login/login';
import { NotFoundComponent } from './features/not-found/not-found';
import { ReportsOverviewComponent } from './features/reports/reports-overview/reports-overview';
import { SaleReportsComponent } from './features/reports/sale-reports/sale-reports';

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
      { path: 'reports/overview', component: ReportsOverviewComponent },
      { path: 'reports/sale-reports', component: SaleReportsComponent },
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
