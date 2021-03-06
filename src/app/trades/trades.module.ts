﻿import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { MyDatePickerModule } from 'mydatepicker';
import { TradesComponent } from './trades.component';
import { TradesRoutes } from './trades.routing';
import { BlottersComponent } from './blotter/blotter.component';
import { DatePipe } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TradesRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        WjGridModule,
        WjInputModule,
        MyDatePickerModule
    ],
    declarations: [
        TradesComponent, BlottersComponent
    ],
    providers: [DatePipe]
})

export class TradesModule { }
