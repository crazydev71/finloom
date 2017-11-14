import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

declare const $: any;

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.style.css']
})

@Injectable()
export class AccountsComponent implements OnInit, AfterViewInit {
  data: wjcCore.CollectionView;
  cvPaging: wjcCore.CollectionView;
  cvGroup: wjcCore.CollectionView;
  private _groupBy = '';
  @ViewChild('flex') flex: WjFlexGrid;

  constructor() {
    this.data = new wjcCore.CollectionView(this.getData(10));
    this.cvPaging = new wjcCore.CollectionView(this.getData(100));
    this.cvPaging.pageSize = 10;
    this.cvGroup = new wjcCore.CollectionView(this.getData(100));
  }

  public ngOnInit() {
  }

  ngAfterViewInit() {
  }

  getData(count: number): wjcCore.ObservableArray {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = new wjcCore.ObservableArray();
    for (var i = 0; i < count; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 == 0
      });
    }
    return data;
  }

  /* Grouping */
  get groupBy(): string {
    return this._groupBy;
  }
  set groupBy(value: string) {
    if (this._groupBy != value) {
      this._groupBy = value;
      this._applyGroupBy();
    }
  }
  private _applyGroupBy() {
    var cv = this.cvGroup;
    cv.beginUpdate();
    cv.groupDescriptions.clear();
    if (this.groupBy) {
      var groupNames = this.groupBy.split(',');
      for (var i = 0; i < groupNames.length; i++) {
        var groupName = groupNames[i];
        if (groupName == 'date') { // group dates by year
          var groupDesc = new wjcCore.PropertyGroupDescription(groupName, function (item, prop) {
            return item.date.getFullYear();
          });
          cv.groupDescriptions.push(groupDesc);
        } else if (groupName == 'amount') { // group amounts in ranges
          var groupDesc = new wjcCore.PropertyGroupDescription(groupName, function (item, prop) {
            return item.amount >= 5000 ? '> 5,000' : item.amount >= 500 ? '500 to 5,000' : '< 500';
          });
          cv.groupDescriptions.push(groupDesc);
        } else { // group everything else by value
          var groupDesc = new wjcCore.PropertyGroupDescription(groupName);
          cv.groupDescriptions.push(groupDesc);
        }
      }
      cv.refresh();
    }
    cv.endUpdate();
  }
}
