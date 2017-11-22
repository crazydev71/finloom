import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

import { AccountsComponent } from './accounts.component';
import { AccountsRoutes } from './accounts.routing';
import { CreateSingleComponent } from './create-single/create-single.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateMultipleComponent } from './create-multiple/create-multiple.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
    WjGridModule
  ],
  exports: [
    FormsModule
  ],
  declarations: [AccountsComponent, CreateSingleComponent, CreateListComponent, CreateMultipleComponent],
  providers: []
})

export class AccountsModule { }
