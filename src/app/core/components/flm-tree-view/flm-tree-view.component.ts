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
  @Input() keys: any = {parent: 'parentId', name: 'aka'};

  items = [];
  isAnimated = true;
  autoCollapse = false;
  expandOnClick = true;

  private treeData = [];

  constructor(private dataservice: DataService) {
    this.items = [{header: 'Loading...', /* img: '*.png', items: [{}] */}];
    this.dataservice.getData('/api/account/get/hierarchy/1').subscribe((data) => {
      this.treeData = data.data;
      if (this.treeData.length) {
        this.items = [];
        this.buildTree (this.treeData, this.items, 0);
      } else {
        this.items = [{header: 'No Data!', img: '/assets/img/placeholder.jpg'/*, items: [{}] */}];
      }
    })
  }

  ngOnInit() {
    console.log(this.api);
  }

  buildTree (data, items, id) {
    var key = this.keys.parent;
    var matches = data.filter(d => {
      return d[key] == id;
    })
    if (matches.length > 0) {
      for (let i = 0; i < matches.length; i++) {
        var child = {
          header: matches[i][this.keys.name], img: '/assets/img/default-avatar.png', items: []
        }
        items.push(child)
        this.buildTree(data, child.items, matches[i].id);
      }
    }
  }
}
