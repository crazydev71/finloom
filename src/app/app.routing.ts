import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './creative/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './creative/layouts/auth/auth-layout.component';
import { AuthGuard } from './_guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: 'accounts',
      loadChildren: './accounts/accounts.module#AccountsModule'
    }]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './creative/dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'components',
        loadChildren: './creative/components/components.module#ComponentsModule'
      }, {
        path: 'forms',
        loadChildren: './creative/forms/forms.module#Forms'
      }, {
        path: 'tables',
        loadChildren: './creative/tables/tables.module#TablesModule'
      }, {
        path: 'maps',
        loadChildren: './creative/maps/maps.module#MapsModule'
      }, {
        path: 'widgets',
        loadChildren: './creative/widgets/widgets.module#WidgetsModule'
      }, {
        path: 'charts',
        loadChildren: './creative/charts/charts.module#ChartsModule'
      }, {
        path: 'calendar',
        loadChildren: './creative/calendar/calendar.module#CalendarModule'
      }, {
        path: '',
        loadChildren: './creative/userpage/user.module#UserModule'
      }, {
        path: '',
        loadChildren: './creative/timeline/timeline.module#TimelineModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'pages',
      loadChildren: './creative/pages/pages.module#PagesModule'
    }]
  }
];
