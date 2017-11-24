import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { DealActivityComponent } from './dealActivity.component';
import { DealActivityRoutes } from './dealActivity.routing';

@NgModule({
    imports: [
        RouterModule.forChild(DealActivityRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [DealActivityComponent]
})

export class DealActivityModule {}
