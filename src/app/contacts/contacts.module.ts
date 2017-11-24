import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutes } from './contacts.routing';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ContactMoreComponent } from './contact-more/contact-more.component';
import { ContactSettingComponent } from './contact-setting/contact-setting.component';
import { CreateMultipleComponent } from './create-multiple/create-multiple.component';
import { CreateSingleComponent } from './create-single/create-single.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactsRoutes),
    MaterialModule
  ],
  declarations: [
    ContactsComponent,
    CreateSingleComponent,
    CreateMultipleComponent,
    ContactsListComponent,
    CreateListComponent,
    ContactMoreComponent,
    ContactSettingComponent,
    CreateSingleComponent,
    CreateMultipleComponent
  ]
})
export class ContactsModule { }
