import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WjNavModule } from 'wijmo/wijmo.angular2.nav';

import { FlmTreeViewComponent } from './flm-tree-view/flm-tree-view.component';
import { FlmTableComponent } from './flm-table/flm-table.component';

@NgModule({
  imports: [
    CommonModule,
    WjNavModule
  ],
  exports: [
    FlmTreeViewComponent,
    FlmTableComponent
  ],
  declarations: [
    FlmTreeViewComponent,
    FlmTableComponent
  ],
  providers: [

  ]
})
export class ComponentsModule { }
