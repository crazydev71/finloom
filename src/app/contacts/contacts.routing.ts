import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { CreateSingleComponent } from './create-single/create-single.component';
import { CreateMultipleComponent } from './create-multiple/create-multiple.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ContactMoreComponent } from './contact-more/contact-more.component';
import { ContactSettingComponent } from './contact-setting/contact-setting.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

export const ContactsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ContactsComponent
      },
      {
        path: 'browser',
        component: ContactsComponent
      },
      {
        path: 'single',
        component: CreateSingleComponent
      },
      {
        path: 'multiple',
        component: CreateMultipleComponent
      },
      {
        path: 'contactlist/:id',
        component: ContactsListComponent
      },
      {
        path: 'list',
        component: CreateListComponent
      },
      {
        path: 'contactmore/:path',
        component: ContactMoreComponent
      },
      {
        path: 'setting',
        component: ContactSettingComponent
      },
      {
        path: 'profile',
        component: ContactProfileComponent
      },
      {
        path: 'edit',
        component: ContactEditComponent
      }
    ]
  }
];
