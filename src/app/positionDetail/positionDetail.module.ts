import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { PositionDetailComponent } from './positionDetail.component';
import { PositionDetailRoutes } from './positionDetail.routing';
import { MyDatePickerModule } from 'mydatepicker';
import { PositionDetailFilterPipe } from '../shared/positiondetail.filter';
import { GroupByPipe } from '../shared/groupby-pipe';

@NgModule({
    imports: [
        RouterModule.forChild(PositionDetailRoutes),
        CommonModule,
        FormsModule,
        MaterialModule,
        MyDatePickerModule
    ],
    declarations: [PositionDetailComponent,PositionDetailFilterPipe,GroupByPipe]
})

export class PositionDetailModule {}
