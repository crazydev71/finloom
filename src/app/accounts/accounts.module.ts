import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

import { AccountsComponent } from './accounts.component';
import { AccountsRoutes } from './accounts.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountsRoutes),
    FormsModule,
    MdModule,
    MaterialModule,
    WjGridModule
  ],
  declarations: [AccountsComponent]
})

export class AccountsModule { }
