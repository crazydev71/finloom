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
  @ViewChild('flex') flex: wjcGrid.FlexGrid;
  private dataSource: any = [];
  data: wjcCore.CollectionView;

  private default_title = "Group By MA,LOB and SA";
  private group_list = [{ title: 'No Grouping', value: null, checked: 'false' }, { title: 'Group By MA,LOB and SA', value: 'MA,LOB,SA', checked: 'true' }];
  private tempRows;
  private accountList;
  private selected: any = { account: {} };
  private selectedList: string = "";
  private view;
  private accountFields: any[] = [{ name: 'aka', title: 'AKA Name' }, { name: 'legalName', title: 'Legal Name' }, { name: 'shortCode', title: 'Short Code' }, { name: 'emailDomain', title: 'Email Domain' }, { name: 'webDomain', title: 'WebDomain' }, { name: 'legalAddress', title: 'Legal Address' }];
  private isEdit: boolean = false;

  constructor(private router: Router,
    private dataService: DataService) {
    this.router.navigateByUrl('/accounts/browser');
  }

  ngOnInit() {
    this.dataSource = this.getData();
    this.getAccountList();
    this.getCollectionViewData(this.dataSource);
    this.flex.hostElement.addEventListener('click',(e) => {
      let ht = this.flex.hitTest(e);
      if(ht.row != -1) {
        let obj = JSON.parse(JSON.stringify(this.flex.rows[ht.row].dataItem));
        this.selected.account = obj;
        this.isEdit = false;
      }
      console.log(this.flex.rows);
      //let index = this.tempRows.findIndex(d => d.id === obj.id);
    });
  }
  
  ngAfterViewInit() {
    this.tempRows = new Array();
    this.flex.rowHeaders.hostElement.addEventListener("click", (e) => {
      let ht = this.flex.hitTest(e);
      if(ht.row != -1) {
        let obj = JSON.parse(JSON.stringify(this.flex.rows[ht.row].dataItem));
        let index = this.tempRows.findIndex(d => d.id === obj.id);
        if (index != -1) {
          this.tempRows.splice(index, 1);
        } else {
          this.tempRows.push(obj);
        }
        console.log(this.tempRows);
      }
    });
    
  }

  private getData(): wjcCore.ObservableArray {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = new wjcCore.ObservableArray();
    this.dataService.getData('/api/account').subscribe((resp: any) => {
      for (let i = 0; i < resp.length; i++) {
        data.push({
          checked: true,
          id: resp[i].id,
          aka: resp[i].aka,
          legalAddress: resp[i].legalAddress,
          legalName: resp[i].legalName,
          shortCode: resp[i].shortCode,
          emailDomain: resp[i].PrimaryEmailDomain,
          webDomain: resp[i].primaryWebDomain,
          accountType: resp[i].accountType
        });
      }
    });
    // parent.data.accountLists = [];
    // parent.data.bankTypes = [];
    // parent.data.industries = [];

    return data;
  }
  
  private getAccountList() {
    this.dataService.getData('/api/account-list')
      .subscribe((resp: any) => {
        this.accountList = resp;
      },
      function (error) {
        console.log(error)
      });
  }

  private getCollectionViewData(data: any) {
    this.view = new wjcCore.CollectionView(data);
  }

  private group_By(group_name: string, group_title: string) {
    console.log(group_name);
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

  onChange(id): void {
    console.log(id);
  }
  private detailStatus(status: string): void {
    if (status == 'edit')
      this.isEdit = !this.isEdit;
    else if(status == 'cancel')
      this.isEdit = false;
    else {
      console.log(this.selected.account);

    }
  }
}
