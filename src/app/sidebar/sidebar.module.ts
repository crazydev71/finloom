import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { ConfirmModalComponent } from '../_component/confirm-modal/confirm-modal.component'
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ RouterModule, CommonModule, FormsModule ],
    declarations: [ SidebarComponent, ConfirmModalComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
