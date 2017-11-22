import { Routes } from '@angular/router';

import { DealActivityComponent } from './dealActivity.component';

export const DealActivityRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: DealActivityComponent
    }]
  }
];
