import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

import { DataService } from '../_services/data.services';
import { ToastrService } from '../_services/toastr.services';
import { Account, AccountList, BankType, Industry } from '../shared/interfaces/model';
import { debug } from 'util';

declare const $: any;
declare var swal: any;

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

  tableData: any = {
    headerRow: ['#', '', 'AKA', 'Short Code', 'Type', '...'],
    dataRows: [],
    domains: []
  };

  constructor(private router: Router, private dataService: DataService, private toastrService: ToastrService) {
    this.router.navigateByUrl('/accounts/browser');
  }

  ngOnInit() {
    this.getAccountList();
    this.getCollectionViewData(this.dataSource);
    this.flex.hostElement.addEventListener('click', (e) => {
      let ht = this.flex.hitTest(e);
      if (ht.row != -1) {
        let obj = JSON.parse(JSON.stringify(this.flex.rows[ht.row].dataItem));
        this.selected.account = obj;
        this.isEdit = false;
      }
      console.log(this.flex.rows);
      //let index = this.tempRows.findIndex(d => d.id === obj.id);
    });
    this.getData();
  }

  ngAfterViewInit() {
    this.tempRows = new Array();
    this.flex.rowHeaders.hostElement.addEventListener("click", (e) => {
      let ht = this.flex.hitTest(e);
      if (ht.row != -1) {
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

  private getData() {
    this.dataService.getData('/api/account/get/all').subscribe((resp: any) => {
      this.tableData.domains = resp.domains;
      this.tableData.dataRows = resp.items;
      this.matchEmails();
    });
  }

  private matchEmails() {
    let domains = this.tableData.domains;
    for (let i = 0; i < this.tableData.dataRows.length; i++) {
      let item = this.tableData.dataRows[i];
      if (item.primaryEmailDomain) {
        item.emailDomain = domains.email.filter(domain => {
          return item.primaryEmailDomain == domain.id;
        });
        item.emailDomain = item.emailDomain[0].name;
      }
      if (item.primaryWebDomain) {
        item.webDomain = domains.web.filter(domain => {
          return item.primaryWebDomain == domain.id;
        });
        item.webDomain = item.webDomain[0].name;
      }
    }
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

  onChange(id, name): void {
    let checked = [];
    for (let i = 0; i < this.tableData.dataRows.length; i++) {
      let row = this.tableData.dataRows[i];
      if (row.isChecked) {
        checked.push(row.id);
      }
    }
    if (checked.length) {
      this.dataService.postData('/api/account-list/update/' + id, { data: { accountIds: checked } })
        .subscribe(resp => {
          this.toastrService.showNotification('Account successfully add to "' + name + '"', 'success');
          this.router.navigateByUrl('/accounts/accountlist/' + id);
        });
    } else {
      alert('At least one account need to be selected!');
    }
  }

  onDetail(row): void {
    console.log(this.tableData.dataRows);
    this.selected.account = Object.assign({}, row);
  }

  onDelete(id: number, rowNum: number): void {
    let _ = this;
    swal({
      title: 'Do you want to delete account?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes Delete it'
    }).then(function (result) {
      _.tableData.dataRows.splice(rowNum, 1);
      _.dataService.deleteData('/api/account/' + id)
        .subscribe((resp: any) => {
          _.toastrService.showNotification('Account successfully deleted', 'success');
        },
        function (error) {
          _.toastrService.showNotification('Server Error', 'danger');
        });
    }).catch(function (err) {
      
    });
  }
  
  private detailStatus(status: string): void {
    if (status == 'edit')
      this.isEdit = !this.isEdit;
    else if (status == 'cancel')
      this.isEdit = false;
    else {
      // delete this.selected.account.isChecked;
      // delete this.selected.account.emailDomain;
      // delete this.selected.account.webDomain;
      this.dataService.putData('/api/account/' + this.selected.account.id, this.selected.account)
        .subscribe((resp: any) => {
          this.selected.accountRef = this.tableData.dataRows.filter(row => {
            return row.id == this.selected.account.id;
          })[0];
          for (let key in this.selected.accountRef) {
            this.selected.accountRef[key] = this.selected.account[key];
          }
          this.isEdit = false;
          this.matchEmails();
          this.toastrService.showNotification('Account successfully updated', 'success');
        },
        function (error) {
          this.toastrService.showNotification('Server error', 'danger');
        });
    }
  }
}
