import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlmTreeViewComponent } from './flm-tree-view/flm-tree-view.component';

import { WjNavModule } from 'wijmo/wijmo.angular2.nav';

@NgModule({
  imports: [
    CommonModule,
    WjNavModule
  ],
  exports: [
    FlmTreeViewComponent
  ],
  declarations: [
    FlmTreeViewComponent
  ],
  providers: [

  ]
})
export class ComponentsModule { }
