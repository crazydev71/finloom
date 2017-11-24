import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjInput from "wijmo/wijmo.input";
import { DataService } from '../../_services/data.services';
declare const $: any;
declare var swal: any;

@Component({
  selector: 'app-create-multiple',
  templateUrl: './create-multiple.component.html',
  styleUrls: ['./create-multiple.component.css']
})
export class CreateMultipleComponent implements OnInit {
  @ViewChild('flex') flex: wjcGrid.FlexGrid;

  private dataSource: any = [];
  data: wjcCore.CollectionView;
  private accountTypes = [{ id: 1, name: 'master', title: 'Master Account' }, { id: 2, name: 'lob', title: 'Line of business' }, { id: 3, name: 'sub', title: 'Sub Account' }];
  private selectedType: string = "master";
  private parentId: any;
  private bankType: any;
  private bankTypes: any;
  private dataMapAccountType: wjcGrid.DataMap;
  private dataMapBankType: wjcGrid.DataMap;
  private dataMapParentAcc: wjcGrid.DataMap;
  private isValid: boolean = false;

  constructor(private dataService: DataService) {
    this.dataSource = this.initTable(3);
    this.getCollectionViewData(this.dataSource);
    let _ = this;
    let validationField = ['aka', 'legalName', 'shortCode', 'primaryEmailDomain', 'primaryWebDomain'];
    this.data = new wjcCore.CollectionView(this.dataSource, {
      getError(item, prop) {
        for (let field of validationField) {
          if (prop == field && item[field] === "") {
            _.isValid = false;
            return true;
          } else {
            _.isValid = true;
          }
        }
      }
    });
  }

  ngOnInit() {
    this.getAccountData();
    this.getBankType();
    this.dataMapAccountType = new wjcGrid.DataMap(this.accountTypes, 'id', 'name');
  }
  getCollectionViewData(data: any) {
    this.data = new wjcCore.CollectionView(data);
  }

  private getBankType() {
    this.dataService.getData('/api/banktype')
      .subscribe((resp: any) => {
        this.bankTypes = resp;
        this.dataMapBankType = new wjcGrid.DataMap(this.bankTypes, 'id', 'name');
      },
      function (error) {
        console.log(error)
      });
  }
  private getAccountData() {
    let parent = this;
    this.dataService.getData('/api/account').subscribe((resp: any) => {
      this.dataMapParentAcc = new wjcGrid.DataMap(resp, 'id', 'aka');
    });

  }
  private initTable(count: number): wjcCore.ObservableArray {
    let data = new wjcCore.ObservableArray();
    for (var i = 1; i < count; i++) {
      data.push({
        aka: '',
        legalName: '',
        shortCode: '',
        primaryEmailDomain: '',
        primaryWebDomain: '',
        accountType: 1,
        parentId: '',
        bankType:''
      });
    }
    return data;
  }

  private onMultiSave() {
    this.getBankType();
    var _ = this;
    if (!_.isValid)
      alert("Please fill all required fields.");
    else {
      swal({
        title: 'Do you want to save these accounts?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Save all'
      }).then(function (result) {
        for (var i = 0; i < _.dataSource.length; i++) {
          _.dataSource[i].domains = {};
          _.dataSource[i].domains.email = { domains: [] };
          _.dataSource[i].domains.web = { domains: [] };
          if (_.dataSource[i].primaryEmailDomain != undefined) {
            _.dataSource[i].domains.email.primary = _.dataSource[i].primaryEmailDomain;
          }

          if (_.dataSource[i].primaryWebDomain != undefined) {
            _.dataSource[i].domains.web.primary = _.dataSource[i].primaryWebDomain;
          }

          if (_.dataSource[i].accountType != undefined)
            _.dataSource[i]['accountType'] = _.accountTypes[_.dataSource[i].accountType - 1].name;

          _.dataSource[i]['bankTypes'] = [_.bankTypes[_.dataSource[i].bankType]];

          _.dataService.postData('/api/account/create', _.dataSource[i])
            .subscribe((resp: any) => {
              //this.router.navigateByUrl('/accounts/browser');
              console.log(resp);
            },
            function (error) {
              console.log(error)
            });
        }
        _.showNotification('top', 'right', "Accounts are saved successfully.");
      }).catch(function (err) {
        
      });
    }
  }

  private onReset() {
    this.dataSource = this.initTable(3);
    this.getCollectionViewData(this.dataSource);
  }

  showNotification(from, align, message) {
    $.notify({
      icon: "add_alert",
      message: message

    }, {
        type: 'success',
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
  }
}
