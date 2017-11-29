
import { Component, OnInit, EventEmitter, Input, Inject, ViewChild } from '@angular/core';
import { DataService } from '../../_services/data.services';

import { FlmTreeViewComponent } from '../../core/components/flm-tree-view/flm-tree-view.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent implements OnInit {
  @ViewChild(FlmTreeViewComponent) flm_tree_view: FlmTreeViewComponent;
  
  constructor(private dataservice: DataService) {
    
  }

  ngOnInit() {

  }
}
