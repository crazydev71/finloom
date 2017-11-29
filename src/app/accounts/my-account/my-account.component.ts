import * as wjcCore from 'wijmo/wijmo';
import * as wjcNav from 'wijmo/wijmo.nav';

import { Component, OnInit, EventEmitter, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent implements OnInit {
  items = [];
  isAnimated = true;
  autoCollapse = true;
  expandOnClick = true;
  constructor() {
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
  }

  ngOnInit() {

  }
}
