import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutes } from './contacts.routing';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ContactMoreComponent } from './contact-more/contact-more.component';
import { ContactSettingComponent } from './contact-setting/contact-setting.component';
import { CreateMultipleComponent } from './create-multiple/create-multiple.component';
import { CreateSingleComponent } from './create-single/create-single.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    WjGridModule,
    WjInputModule
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
    CreateMultipleComponent,
    ContactProfileComponent,
    ContactEditComponent
  ]
})
export class ContactsModule { }
