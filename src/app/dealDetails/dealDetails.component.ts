import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

declare const $: any;

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
  dealBorrowers: any = [];
  showDealError: boolean = false;
  facilityLendersData: wjcCore.CollectionView;
  dealDueData: wjcCore.CollectionView;
  facilityDueData: wjcCore.CollectionView;
  private newFacilityLenderData: wjcCore.CollectionView;
  private newDealDueData: wjcCore.CollectionView;
  private newFacilityDueData: wjcCore.CollectionView;
  private facilitylenderDataSource: any = [];
  private dealDuesDataSource: any = [];
  private facilityDuesDataSource: any = [];
  private DealEdit: any;
  private FacilityEdit: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.selectedDealId = params['id'];
    });
  }
  public status: any[] = [
    { value: 'Active', text: 'Active' },
    { value: 'Pending', text: 'Pending' },
    { value: 'Terminated', text: 'Terminated' },
    { value: 'Complete', text: 'Complete' }
  ];

  public ngOnInit() {
    this.dealHeaders = { DealName: 'Deal Name', DealAlias: 'Deal Alias', AgentBank: 'Agent Bank', SyndicateBank: 'Syndicate Bank', DealStatus: 'Deal Status' };
    this.dueHeaders = { DealDetails: 'Deal Details', DealDues: 'Deal Dues', DueType: 'Due Type', DueAmount: 'Due Amount', DueDate: 'Due Date', PaidAmount: 'Paid Amount' };
    this.contractHeaders = { ContractName: 'Contract Name', ContractAlias: 'Contract Alias', CurrentAmount: 'Current Amount' };
    this.facilityheaders = { FacilityDetails: 'Facility Details', FacilityDues: 'Facility Dues', FacilityName: 'Facility Name', FacilityAlias: 'Facility Alias', CurrentCommitment: 'Current Commitment' };
    this.dealModel = {
      DealName: 'Expedia Company 11/1/2017', DealAlias: 'Expedia Company 11/1/2017', AgentBank: 'JP Morgan Chase', SyndicateBank: 'JP Morgan Chase', DealStatus: 'Pending', DealStatusId: 'Active', DealSyndicateBankId: '1', DealAgentBankId: '1',
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
    this.createNewRowData();
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

  saveNewFacilityLender(item: any) {
    let flag = false;
    let prop = ['LenderName', 'InterestAmount', 'AllocatedAmount'];
    for (let val of prop) {
      let isError = this.newFacilityLenderData.getError(item, val);
      if (isError == true) {
        flag = true;
        alert("Please fill all required fields.")
        break;
      }
      else {
        flag = false;
      }
    }
    if (!flag) {
      this.facilitylenderDataSource.push(item);
      this.createNewRowData();
      this.showNotification('top', 'right', "Facility Lender added successfully.");
    }
  }

  clearNewFacilityLender() {
    this.createNewRowData();
  }

  getNewFacilityLender(count: number): wjcCore.ObservableArray {
    let data = new wjcCore.ObservableArray();
    for (var i = 0; i < count; i++) {
      data.push({
        LenderName: "",
        InterestAmount: 0,
        AllocatedAmount: 0
      });
    }
    return data;
  }

  createNewRowData() {
    this.newFacilityLenderData = new wjcCore.CollectionView(this.getNewFacilityLender(1), {
      getError(item, prop) {
        if (prop == 'LenderName' && item.LenderName === "") {
          return true;
        }
        if (prop == 'InterestAmount' && item.InterestAmount === null) {
          return true;
        }
        if (prop == 'AllocatedAmount' && item.AllocatedAmount === null) {
          return true;
        }
      }
    });
  }

  editDeal(data: any) {
    this.showDealError = false;
    this.DealEdit = JSON.parse(JSON.stringify(data));
    if (this.dealBorrowers.length > 0) {
      this.DealEdit.DealBorrowers = this.dealBorrowers;
    } else {
      this.addDealBorrower();
      this.DealEdit.DealBorrowers = this.dealBorrowers;
    }
    $("#editDealModal").modal('show');
  }

  editFacility(data: any) {
    // this.FacilityEdit = JSON.parse(JSON.stringify(data));
    // $("#editFacilityModal").modal('show');

    this.router.navigateByUrl('/editFacility/' + data.facilityId);
  }

  saveDeal(f: NgForm) {
    if (f.valid) {
      $("#editDealModal").modal('hide');
    } else {
      this.showDealError = true;
    }
  }

  saveFacility(f: NgForm) {
    if (f.valid) {
      $("#editFacilityModal").modal('hide');
    } else {
    }
  }

  addDealBorrower() {
    let dealBorrower = {
      'isChecked': false,
      'accountId': ''
    }
    this.dealBorrowers.push(dealBorrower);
  }

  removeDealBorrower(index: number) {
    if (index > -1) {
      this.dealBorrowers.splice(index, 1);
    }
  }

  // Deal Dues
  getDealDues() {
    this.dealDuesDataSource = this.getDealDuesData(10);
    this.getDealDueCollectionViewData(this.dealDuesDataSource);
    this.createDealDuesRowData();
  }

  createDealDuesRowData() {
    this.newDealDueData = new wjcCore.CollectionView(this.getNewDealDue(1), {
      getError(item, prop) {
        if (prop == 'DueType' && item.DueType === "") {
          return true;
        }
        if (prop == 'DueAmount' && item.DueAmount === null) {
          return true;
        }
        if (prop == 'DueDate' && item.DueDate === null) {
          return true;
        }
      }
    });
  }

  getNewDealDue(count: number): wjcCore.ObservableArray {
    let data = new wjcCore.ObservableArray();
    for (var i = 0; i < count; i++) {
      data.push({
        DueType: "",
        DueAmount: 0,
        DueDate: new Date()
      });
    }
    return data;
  }

  getDealDueCollectionViewData(data: any) {
    this.dealDueData = new wjcCore.CollectionView(data);
  }


  onDealDueDelete(data: any) {
    var that = this;
    swal({
      title: 'Are you sure? Do you want to delete this deal due?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (result) {
      let index = that.dealDuesDataSource.findIndex(d => d.id === data.id);
      that.dealDuesDataSource.splice(index, 1);
      that.showNotification('top', 'right', "Deal Due deleted successfully.");
    })
  }

  onDealDueEdit(data: any) {
    let itemIndex = this.dealDuesDataSource.findIndex(item => item.id == data.id);
    this.dealDuesDataSource[itemIndex] = data;
    this.showNotification('top', 'right', "Deal Dues updated successfully.");
  }

  saveNewDealDue(item: any) {
    let flag = false;
    let prop = ['DueType', 'DueAmount', 'DueDate'];
    for (let val of prop) {
      let isError = this.newDealDueData.getError(item, val);
      if (isError == true) {
        flag = true;
        alert("Please fill all required fields.")
        break;
      }
      else {
        flag = false;
      }
    }
    if (!flag) {
      this.dealDuesDataSource.push(item);
      this.createDealDuesRowData();
      this.showNotification('top', 'right', "Deal Due added successfully.");
    }
  }

  clearNewDealDue() {
    this.createDealDuesRowData();
  }

  getDealDuesData(count: number): wjcCore.ObservableArray {
    var data = new wjcCore.ObservableArray();
    for (var i = 1; i < count; i++) {
      data.push({
        id: i,
        DueType: "Type" + i,
        DueAmount: i * 100,
        DueDate: new Date()
      });
    }
    return data;
  }

  // Facility Dues
  getFacilityDues(Id: number) {
    this.facilityDuesDataSource = this.getFacilityDuesData(10);
    this.getFacilityDueCollectionViewData(this.facilityDuesDataSource);
    this.createFacilityDuesRowData();
  }

  createFacilityDuesRowData() {
    this.newFacilityDueData = new wjcCore.CollectionView(this.getNewFacilityDue(1), {
      getError(item, prop) {
        if (prop == 'DueType' && item.DueType === "") {
          return true;
        }
        if (prop == 'DueAmount' && item.DueAmount === null) {
          return true;
        }
        if (prop == 'DueDate' && item.DueDate === null) {
          return true;
        }
      }
    });
  }

  getNewFacilityDue(count: number): wjcCore.ObservableArray {
    let data = new wjcCore.ObservableArray();
    for (var i = 0; i < count; i++) {
      data.push({
        DueType: "",
        DueAmount: 0,
        DueDate: new Date()
      });
    }
    return data;
  }

  getFacilityDueCollectionViewData(data: any) {
    this.facilityDueData = new wjcCore.CollectionView(data);
  }


  onFacilityDueDelete(data: any) {
    var that = this;
    swal({
      title: 'Are you sure? Do you want to delete this facility due?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (result) {
      let index = that.facilityDuesDataSource.findIndex(d => d.id === data.id);
      that.facilityDuesDataSource.splice(index, 1);
      that.showNotification('top', 'right', "Facility Due deleted successfully.");
    })
  }

  onFacilityDueEdit(data: any) {
    let itemIndex = this.facilityDuesDataSource.findIndex(item => item.id == data.id);
    this.facilityDuesDataSource[itemIndex] = data;
    this.showNotification('top', 'right', "Facility Dues updated successfully.");
  }

  saveNewFacilityDue(item: any) {
    let flag = false;
    let prop = ['DueType', 'DueAmount', 'DueDate'];
    for (let val of prop) {
      let isError = this.newFacilityDueData.getError(item, val);
      if (isError == true) {
        flag = true;
        alert("Please fill all required fields.")
        break;
      }
      else {
        flag = false;
      }
    }
    if (!flag) {
      this.facilityDuesDataSource.push(item);
      this.createFacilityDuesRowData();
      this.showNotification('top', 'right', "Facility Due added successfully.");
    }
  }

  clearNewFacilityDue() {
    this.createFacilityDuesRowData();
  }

  getFacilityDuesData(count: number): wjcCore.ObservableArray {
    var data = new wjcCore.ObservableArray();
    for (var i = 1; i < count; i++) {
      data.push({
        id: i,
        DueType: "Type" + i,
        DueAmount: i * 100,
        DueDate: new Date()
      });
    }
    return data;
  }

}
