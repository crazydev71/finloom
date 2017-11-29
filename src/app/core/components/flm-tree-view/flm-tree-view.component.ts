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
  autoCollapse = true;
  expandOnClick = true;
  constructor(private dataservice: DataService) {
    this.items = [
      {
        header: 'Electronics', img: 'assets/img/default-avatar.png', items: [
          { header: 'Trimmers/Shavers' },
          { header: 'Tablets' },
          {
            header: 'Phones', img: 'assets/img/default-avatar.png', items: [
              { header: 'Apple' },
              { header: 'Motorola', newItem: true },
              { header: 'Nokia' },
              { header: 'Samsung' }]
          },
          { header: 'Speakers', newItem: true },
          { header: 'Monitors' }
        ]
      },
    ];
    // this.dataservice.getData('/api/account/hierarchy/')
  }

  ngOnInit() {
    console.log(this.api);
  }

}
