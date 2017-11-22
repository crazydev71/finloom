import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

import { DataService } from '../_services/data.services';
import { Account, AccountList, BankType, Industry } from '../shared/interfaces/model';

declare const $: any;

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.style.css']
})

@Injectable()
export class AccountsComponent implements OnInit, AfterViewInit {
  @ViewChild('flex') flexGrid: WjFlexGrid;
  
  private default_title = "Group By MA,LOB and SA";
  private group_list = [{ title: 'No Grouping', value: null, checked: 'false' }, { title: 'Group By MA,LOB and SA', value: 'MA,LOB,SA', checked: 'true' }];
  public data: any = {};
  public selected: any = {account: {}};
  private view;
  private flex;
  private accountFields: any[] = [{name: 'aka', title: 'AKA Name'}, {name: 'legalName', title: 'Legal Name'}, {name: 'shortCode', title: 'Short Code'}, {name: 'domain', title: 'Domain'}, {name: 'legalAddress', title: 'Legal Address'}];
  constructor (private router: Router,
               private dataservice: DataService) {
    this.router.navigateByUrl('/accounts/browser');
  }

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {}

  private initAccountsTable () {
    let parent = this;
    this.view = new wjcCore.CollectionView(this.data.accounts, {
      sortDescriptions: [new wjcCore.SortDescription('id', true)]
    });
    
    // initialize item count display
    this.view.onCollectionChanged();
    var flex = new wjcGrid.FlexGrid('#theGrid', {
      itemsSource: this.view,
      selectionChanged: function(s, e) {
        var stats = flex.selection;
        let newData = flex.selectedRows[0]._data || {};
        parent.selected.account = newData;
      },
      allowAddNew: true
    });

    // this.group_By('MA,LOB,SA', this.default_title);
    this.flex = flex;
  }

  public getData() {
    let parent = this;
    this.dataservice.getData('/api/account').subscribe((resp: any) => {
      parent.data.accounts = resp;
      for (let i = 0; i < parent.data.accounts.length; i++) {
        let account = parent.data.accounts[i];
        account.MA = account.parentId;
        account.LOB = account.parentId;
      }
      parent.initAccountsTable();
    });
    parent.data.accountLists = [];
    parent.data.bankTypes = [];
    parent.data.industries = [];
  }

  public group_By(group_name: string, group_title: string) {
    this.default_title = group_title;
    this.view.groupDescriptions.clear();
    if (group_name == null)
      return;
		var props = group_name.split(',');
    for (var i = 0; i < props.length; i++) {
    	var prop = props[i];
      var gd;
      gd = new wjcCore.PropertyGroupDescription(prop);
      this.view.groupDescriptions.push(gd);
    }
  }
}
