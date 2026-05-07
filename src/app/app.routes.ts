import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { LayoutComponent } from './layout/layout/layout';
import { UsersComponent } from './features/users/users';
import { authGuard } from './core/guards/auth-guard';
import { Login } from './auth/login/login';
import { SettingsComponent } from './features/settings/settings';
import { PropertiesList } from './features/properties/properties-list/properties-list';
import { AddNewProperty } from './features/properties/add-new-property/add-new-property';
import { PropertyFeature } from './features/properties/property-feature/property-feature';
import { BookingReports } from './features/reports/booking-reports/booking-reports';
import { PaymentReports } from './features/reports/payment-reports/payment-reports';
import { Bookings } from './features/bookings/bookings';
import { Message } from './features/message/message';
import { PaymentList } from './features/payments/payment-list/payment-list';
import { PaymentMethod } from './features/payments/payment-method/payment-method';
import { PaymentDetail } from './features/payments/payment-detail/payment-detail';
import { NotFoundComponent } from './features/not-found/not-found';
import { PropertyCategory } from './features/properties/property-category/property-category';
import { ReportsOverviewComponent } from './features/reports/reports-overview/reports-overview';
import { SaleReportsComponent } from './features/reports/sale-reports/sale-reports';
import { Meetings } from './features/meetings/meetings';

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
      { path: 'settings', component : SettingsComponent },
      { path: 'properties', component: PropertiesList },
      { path: 'properties/add-new', component: AddNewProperty },
      { path: 'properties/categories', component: PropertyCategory },
      { path: 'properties/features', component: PropertyFeature },
      { path: 'reports/overview', component: ReportsOverviewComponent},
      { path: 'properties/categories', component: PropertyCategory },
      { path: 'reports/overview', component: ReportsOverviewComponent},
      { path: 'reports/booking-reports', component: BookingReports },
      { path: 'reports/payment-reports', component: PaymentReports},
      { path: 'bookings', component: Bookings},
      { path: 'meetings', component: Meetings},
      { path: 'messages', component: Message},
      { path: 'payments/all', component: PaymentList},
      { path: 'payments/methods', component: PaymentMethod},
      { path: 'payments/details', component: PaymentDetail},
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
