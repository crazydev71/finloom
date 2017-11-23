import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { DealWizardComponent } from './dealWizard.component';
import { DealWizardRoutes } from './dealWizard.routing';

@NgModule({
  imports: [
    RouterModule.forChild(DealWizardRoutes),
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [DealWizardComponent]
})

export class DealWizardModule { }
