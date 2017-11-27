import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './_guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }, {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: './auth/auth.module#AuthModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'accounts',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './accounts/accounts.module#AccountsModule'
    }
    ]
  }, {
    canActivate: [AuthGuard],
    path: 'contacts',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './contacts/contacts.module#ContactsModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'deals',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './deals/deals.module#DealsModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'dealDetails',
    component: AdminLayoutComponent,
    children: [{
      path: ':id',
      loadChildren: './dealDetails/dealDetails.module#DealDetailsModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'dealWizard',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './dealWizard/dealWizard.module#DealWizardModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'addDeal',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './addDeal/addDeal.module#AddDealModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'trades',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './trades/trades.module#TradesModule'
    }]
  },{
    canActivate: [AuthGuard],
    path: 'dealActivity',
    component: AdminLayoutComponent,
    children: [{
      path: ':id',
      loadChildren: './dealActivity/dealActivity.module#DealActivityModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'position',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './position/position.module#PositionModule'
    }]
  }, {
    canActivate: [AuthGuard],
    path: 'positionDetail',
    component: AdminLayoutComponent,
    children: [{
      path: ':id',
      loadChildren: './positionDetail/positionDetail.module#PositionDetailModule'
    }]
  }, {
    path: 'editFacility',
    component: AdminLayoutComponent,
    children: [{
      path: ':id',
      loadChildren: './editFacility/editFacility.module#EditFacilityModule'
    }]
  }
  /*{
    path: 'creative',
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
  }*/
];
