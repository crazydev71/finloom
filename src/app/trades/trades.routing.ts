import { Routes } from '@angular/router';
import { TradesComponent } from './trades.component';
import { BlottersComponent } from './blotter/blotter.component';

export const TradesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: TradesComponent
            },
            {
                path: 'input',
                component: TradesComponent
            }, {
                path: 'blotter',
                component: BlottersComponent    
            }]
    }
];
