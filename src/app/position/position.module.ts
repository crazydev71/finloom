import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { PositionComponent } from './position.component';
import { PositionRoutes } from './position.routing';

@NgModule({
    imports: [
        RouterModule.forChild(PositionRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [PositionComponent]
})

export class PositionModule {}
