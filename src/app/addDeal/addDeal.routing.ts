import { Routes } from '@angular/router';

import { AddDealComponent } from './addDeal.component';

export const AddDealRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: AddDealComponent
    }]
  }
];
