import { Routes } from '@angular/router';

import { PositionDetailComponent } from './positionDetail.component';

export const PositionDetailRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: PositionDetailComponent
    }]
  }
];
