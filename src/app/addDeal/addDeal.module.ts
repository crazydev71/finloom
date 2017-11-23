import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { AddDealComponent } from './addDeal.component';
import { AddDealRoutes } from './addDeal.routing';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
@NgModule({
  imports: [
    RouterModule.forChild(AddDealRoutes),
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule
  ],
  declarations: [AddDealComponent, FieldErrorDisplayComponent]
})

export class AddDealModule { }
