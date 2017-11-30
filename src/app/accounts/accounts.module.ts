import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module'

import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjNavModule } from 'wijmo/wijmo.angular2.nav';

import { AccountsComponent } from './accounts.component';
import { AccountsRoutes } from './accounts.routing';
import { CreateSingleComponent } from './create-single/create-single.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateMultipleComponent } from './create-multiple/create-multiple.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
    WjGridModule,
    WjInputModule,
    WjNavModule,
    CoreModule
  ],
  exports: [
    FormsModule
  ],
  declarations: [AccountsComponent, CreateSingleComponent, CreateListComponent, CreateMultipleComponent, AccountsListComponent, MyAccountComponent],
  providers: []
})

export class AccountsModule { }
// platformBrowserDynamic().bootstrapModule(AccountsModule);
