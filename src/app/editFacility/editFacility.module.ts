import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { EditFacilityComponent } from './editFacility.component';
import { EditFacilityRoutes } from './editFacility.routing';


@NgModule({
    imports: [
        RouterModule.forChild(EditFacilityRoutes),
        CommonModule,
        FormsModule,
        MaterialModule,
        WjGridModule
    ],
    declarations: [EditFacilityComponent]
})

export class EditFacilityModule {}
