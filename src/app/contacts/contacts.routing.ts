import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { FrequentContactComponent } from './frequent-contact/frequent-contact.component';
import { ContactDuplicatesComponent } from './contact-duplicates/contact-duplicates.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ContactMoreComponent } from './contact-more/contact-more.component';
import { ContactSettingComponent } from './contact-setting/contact-setting.component';

export const ContactsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ContactsComponent
      },
      {
        path: 'contact',
        component: ContactsComponent
      },
      {
        path: 'fqcontact',
        component: FrequentContactComponent
      },
      {
        path: 'duplicates',
        component: ContactDuplicatesComponent
      },
      {
        path: 'contactlists/:id',
        component: ContactsListComponent
      },
      {
        path: 'createlist',
        component: CreateListComponent
      },
      {
        path: 'contactmore/:path',
        component: ContactMoreComponent
      },
      {
        path: 'setting',
        component: ContactSettingComponent
      }
    ]
  }
];
