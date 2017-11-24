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
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }]
  }, {
    path: 'accounts',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './accounts/accounts.module#AccountsModule'
    }
    ]
  }, {
    path: 'contacts',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './contacts/contacts.module#ContactsModule'
    }]
  }, {
    path: 'deals',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './deals/deals.module#DealsModule'
    }]
  }, {
    path: 'dealDetails',
    component: AdminLayoutComponent,
    children: [{
      path: ':id',
      loadChildren: './dealDetails/dealDetails.module#DealDetailsModule'
    }]
  }, {
    path: 'dealWizard',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './dealWizard/dealWizard.module#DealWizardModule'
    }]
  }, {
    path: 'addDeal',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './addDeal/addDeal.module#AddDealModule'
    }]
  }, {
    path: 'trades',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './trades/trades.module#TradesModule'
    }]
  },{
    path: 'dealActivity',
    component: AdminLayoutComponent,
    children: [{
      path: ':id',
      loadChildren: './dealActivity/dealActivity.module#DealActivityModule'
    }]
  }, {
    path: 'position',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './position/position.module#PositionModule'
    }]
  }, {
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
