import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

declare const $: any;
declare interface Task {
  title: string;
  checked: boolean;
}
declare var swal: any;
@Component({
  selector: 'app-dealDetails',
  templateUrl: './dealDetails.component.html',
  styleUrls: ['./dealDetails.style.css']
})

export class DealDetailsComponent implements OnInit {
  private sub: any;
  selectedDealId: number = 0;
  public dealHeaders: any = {};
  public dueHeaders: any = [];
  public dealModel: any = {};
  public facilitiesModel: any = [];
  public facilityheaders: any = [];
  public contractHeaders: any = [];
  public data = [];
  private view;
  loadGrid: boolean = false;
  private account_name = 'Rechard Del,Sachie Clark,Trant Blarkey,Tae Carrilio,Ryone Cloke,Rahul Dickstein'.split(',');
  private account_email = 'Test1@gmail.com,Test2@gmail.com,Test3@gmail.com,Test4@gmail.com,Test5@gmail.com'.split(',');
  private contact_bank = 'Bank of America,Bank of United Kingdom'.split(',');
  facilityLendersData: wjcCore.CollectionView;
  private facilitylenderDataSource: any = [];
  constructor(private router: Router, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.selectedDealId = params['id'];
    });
  }

  public ngOnInit() {
    this.dealHeaders = { DealName: 'Deal Name', DealAlias: 'Deal Alias', AgentBank: 'Agent Bank', SyndicateBank: 'Syndicate Bank', DealStatus: 'Deal Status' };
    this.dueHeaders = { DealDetails: 'Deal Details', DealDues: 'Deal Dues', DueType: 'Due Type', DueAmount: 'Due Amount', DueDate: 'Due Date', PaidAmount: 'Paid Amount' };
    this.contractHeaders = { ContractName: 'Contract Name', ContractAlias: 'Contract Alias', CurrentAmount: 'Current Amount' };
    this.facilityheaders = { FacilityDetails: 'Facility Details', FacilityDues: 'Facility Dues', FacilityName: 'Facility Name', FacilityAlias: 'Facility Alias', CurrentCommitment: 'Current Commitment' };
    this.dealModel = {
      DealName: 'Expedia Company 11/1/2017', DealAlias: 'Expedia Company 11/1/2017', AgentBank: 'JP Morgan Chase', SyndicateBank: 'JP Morgan Chase', DealStatus: 'Pending',
      dealDues: [
        { dueType: 'Admin', dueAmount: '100', dueDate: '11/17/2017', paidAmount: '50' },
        { dueType: 'Admin', dueAmount: '200', dueDate: '11/17/2017', paidAmount: '130' }
      ]
    };

    this.facilitiesModel = [
      {
        facilityId: '1', facilityName: 'facility 1', href: 'fac1', facilityAlias: 'faility 1', currentCommitment: '100',
        contractModel: [
          { contractId: 1, contractName: 'contract1', contractAlias: 'contract1', currentAmount: '500' },
          { contractId: 2, contractName: 'contract2', contractAlias: 'contract2', currentAmount: '1000' },
        ],
        facilityDues: [
          { dueType: 'Admin', dueAmount: '100', dueDate: '11/17/2017', paidAmount: '50' },
          { dueType: 'Admin', dueAmount: '200', dueDate: '11/17/2017', paidAmount: '130' }
        ]
      },
      {
        facilityId: '2', facilityName: 'facility 2', href: 'fac2', facilityAlias: 'faility 2', currentCommitment: '200',
        contractModel: [
          { contractId: 3, contractName: 'contract3', contractAlias: 'contract3', currentAmount: '300' },
          { contractId: 4, contractName: 'contract4', contractAlias: 'contract4', currentAmount: '200' },
        ],
        facilityDues: [
          { dueType: 'Admin', dueAmount: '100', dueDate: '11/17/2017', paidAmount: '50' },
          { dueType: 'Admin', dueAmount: '200', dueDate: '11/17/2017', paidAmount: '130' }
        ]
      }
    ];



  }
  getDealDues() {
    if (this.loadGrid == false) {
      this.loadGrid = true;
      this.data = this.getData();
      this.view = new wjcCore.CollectionView(this.data, {
      });
      $(".dealDuesGrid").html("");
      var theGrid = new wjcGrid.FlexGrid('.dealDuesGrid', {
        itemsSource: this.view,
        allowAddNew: true,
        allowDelete: true,
        showAlternatingRows: false,
        headersVisibility: 'Row'
      });
    }
  }

  public getData() {
    var data = [];
    for (var i = 0; i < this.dealModel.dealDues.length; i++) {
      data.push({
        dueType: this.dealModel.dealDues[i].dueType,
        dueAmount: this.dealModel.dealDues[i].dueAmount,
        dueDate: this.dealModel.dealDues[i].dueDate,
        paidAmount: this.dealModel.dealDues[i].paidAmount,
      });
    }
    return data;
  }


  getCollectionViewData(data: any) {
    this.facilityLendersData = new wjcCore.CollectionView(data);
  }

  getFacilityLendersData(count: number): wjcCore.ObservableArray {
    var data = new wjcCore.ObservableArray();
    for (var i = 1; i < count; i++) {
      data.push({
        id: i,
        LenderName: "Lender" + i,
        InterestAmount: i * 100,
        AllocatedAmount: i * 100
      });
    }
    return data;
  }

  getFacilityLenders() {
    this.facilitylenderDataSource = this.getFacilityLendersData(10);
    this.getCollectionViewData(this.facilitylenderDataSource);
  }

  onDelete(data: any) {
    var that = this;
    swal({
      title: 'Are you sure? Do you want to delete this facility lender?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (result) {
      let index = that.facilitylenderDataSource.findIndex(d => d.id === data.id);
      that.facilitylenderDataSource.splice(index, 1);
      that.showNotification('top', 'right', "Facility Lender deleted successfully.");
    })
  }

  onEdit(data: any) {
    let itemIndex = this.facilitylenderDataSource.findIndex(item => item.id == data.id);
    this.facilitylenderDataSource[itemIndex] = data;
    this.showNotification('top', 'right', "Facility Lender updated successfully.");
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
