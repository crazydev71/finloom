import { Routes } from '@angular/router';
import { EditFacilityComponent } from './editFacility.component';

export const EditFacilityRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: EditFacilityComponent
    }]
  }
];
