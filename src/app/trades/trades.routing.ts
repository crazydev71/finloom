import { Routes } from '@angular/router';

import { TradesComponent } from './trades.component';

export const TradesRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: TradesComponent
        }]
    }
];
