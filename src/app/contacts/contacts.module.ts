import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../creative/md/md.module';
import { MaterialModule } from '../app.module';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutes } from './contacts.routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactsRoutes),
    MaterialModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
