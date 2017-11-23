import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { DealsComponent } from './deals.component';
import { DealsRoutes } from './deals.routing';

@NgModule({
  imports: [
    RouterModule.forChild(DealsRoutes),
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [DealsComponent]
})

export class DealsModule { }
