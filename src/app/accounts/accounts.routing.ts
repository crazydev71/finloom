import { Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { CreateSingleComponent } from './create-single/create-single.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateMultipleComponent } from './create-multiple/create-multiple.component';

export const AccountsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AccountsComponent
      },
      {
        path: 'browser',
        component: AccountsComponent
      },
      {
        path: 'single',
        component: CreateSingleComponent
      },
      {
        path: 'list',
        component: CreateListComponent
      },
      {
        path: 'multiple',
        component: CreateMultipleComponent
      }
    ]
  }
];
