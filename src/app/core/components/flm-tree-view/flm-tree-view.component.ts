import { Component, OnInit, Input, EventEmitter, Inject } from '@angular/core';
import { DataService } from '../../../_services/data.services';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcNav from 'wijmo/wijmo.nav';

@Component({
  selector: 'app-flm-tree-view',
  templateUrl: './flm-tree-view.component.html',
  styleUrls: ['./flm-tree-view.component.css']
})

export class FlmTreeViewComponent implements OnInit {
  @Input() api: string;

  items = [];
  isAnimated = true;
  autoCollapse = false;
  expandOnClick = true;
  constructor(private dataservice: DataService) {
    this.items = [{header: 'Loading...', /* img: '*.png', items: [{}] */}];
    this.dataservice.getData('/api/account/get/hierarchy/1').subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
    console.log(this.api);
  }

}
