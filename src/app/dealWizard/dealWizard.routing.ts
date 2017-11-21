import { Routes } from '@angular/router';

import { DealWizardComponent } from './dealWizard.component';

export const DealWizardRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: DealWizardComponent
    }]
  }
];
