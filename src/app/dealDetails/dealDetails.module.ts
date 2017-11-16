import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { DealDetailsComponent } from './dealDetails.component';
import { DealDetailsRoutes } from './dealDetails.routing';

@NgModule({
    imports: [
        RouterModule.forChild(DealDetailsRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [DealDetailsComponent]
})

export class DealDetailsModule {}
