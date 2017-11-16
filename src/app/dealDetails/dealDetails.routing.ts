import { Routes } from '@angular/router';

import { DealDetailsComponent } from './dealDetails.component';

export const DealDetailsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: DealDetailsComponent
    }]
  }
];
