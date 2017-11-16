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
  @ViewChild('flex') flex: WjFlexGrid;
  
  private accounts = [
    {name: "Browser"},
    {name: "Create Single"},
    {name: "Create Multiple"}
  ];
  
  private account_list = [
    {name: "List01"},
    {name: "List02"}    
  ];

  private Master_Account = 'Master_A1,Master_A2,Master_A3,Master_A4,Master_A5,Master_A6'.split(',');
  private Lob_Account = 'Lob_A1,Lob_A2,Lob_A3,Lob_A4,Lob_A5'.split(',');
  private Sa_Account = 'Sa_A1,Sa_A2,Sa_A3,Sa_A4,Sa_A5'.split(',');

  private account_name = "My Account";
  
  private group_list = [
    {
      title: 'No Grouping',
      value: '',
      checked: 'true'
    },
    {
      title: 'By MA and by LOB and by SA',
      value: 'MA,LOB,SA',
      checked: 'false'
    },
    
  ]
  public data = [];
  private view;
  constructor() {
      
  }

  public choose_account(name: string): void {
    this.account_name = name;
  }

  public ngOnInit() {
    this.data = this.getData();
    this.view = new wjcCore.CollectionView(this.data, {
      sortDescriptions: [new wjcCore.SortDescription('sales', false)]
    });
    
    // initialize item count display
    this.view.onCollectionChanged();
    var flex = new wjcGrid.FlexGrid('#theGrid', {
      itemsSource: this.view,
      selectionChanged: function(s, e) {
        if (!flex.selection.isSingleCell) {
          //var stats = getSelectionStats(flex);
          console.log('aaa');
        }
      },
      showAlternatingRows: false,
      headersVisibility: 'Row'
    });

  }

  ngAfterViewInit() {
  
  }

  public getData() {
    var data = [];
    for (var i = 0; i < 1000; i++) {
      data.push({
        MA:  this.Master_Account[i % this.Master_Account.length],
        LOB: this.Lob_Account[i % this.Lob_Account.length],
        SA:  this.Sa_Account[i % this.Sa_Account.length],
      });
    }
    return data;
  }

  public group_By(group_name: string) {
    this.view.groupDescriptions.clear();
    
    // add the new groups
		var props = group_name.split(',');
    for (var i = 0; i < props.length; i++) {
    	var prop = props[i];
      
      // group sales by value ranges
      var gd;
    	gd = new wjcCore.PropertyGroupDescription(prop);
      this.view.groupDescriptions.push(gd);
    }
  }


}
