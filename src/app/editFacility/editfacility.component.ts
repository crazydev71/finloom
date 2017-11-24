import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
declare var swal: any;
declare const $: any;
@Component({
  selector: 'app-editFacility',
  templateUrl: './editFacility.component.html',
  styleUrls: ['./editFacility.style.css']
})


export class EditFacilityComponent implements OnInit {
  private sub: any;
  selectedFacilityId: number = 0;
  public facilitiesModel: any = [];
  public facilityheaders: any = [];
  public data = [];
  private view;
  loadGrid: boolean = false;
  private account_name = 'Rechard Del,Sachie Clark,Trant Blarkey,Tae Carrilio,Ryone Cloke,Rahul Dickstein'.split(',');
  private account_email = 'Test1@gmail.com,Test2@gmail.com,Test3@gmail.com,Test4@gmail.com,Test5@gmail.com'.split(',');
  private contact_bank = 'Bank of America,Bank of United Kingdom'.split(',');
  facilityLendersData: wjcCore.CollectionView;
  private newFacilityLenderData: wjcCore.CollectionView;
  private facilitylenderDataSource: any = [];
  private DealEdit: any;
  private FacilityEdit: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    debugger;
    this.sub = this.route.params.subscribe(params => {
      this.selectedFacilityId = params['id'];
    });
  }
  public status: any[] = [
    { value: 'Active', text: 'Active' },
    { value: 'Pending', text: 'Pending' },
    { value: 'Terminated', text: 'Terminated' },
    { value: 'Complete', text: 'Complete' }
  ];

  public ngOnInit() {
    debugger;
    this.facilityheaders = { FacilityDetails: 'Facility Details', FacilityDues: 'Facility Dues', FacilityName: 'Facility Name', FacilityAlias: 'Facility Alias', CurrentCommitment: 'Current Commitment' };


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
    debugger;
    this.FacilityEdit = {facilityId: '1', facilityName: 'facility 1', href: 'fac1', facilityAlias: 'faility 1', currentCommitment: '100'};

    this.getFacilityLenders();

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
    this.DealEdit = JSON.parse(JSON.stringify(data));
    $("#editDealModal").modal('show');
  }

  editFacility(data: any) {
    this.FacilityEdit = JSON.parse(JSON.stringify(data));
    $("#editFacilityModal").modal('show');
  }

  saveDeal(f: NgForm) {
    if (f.valid) {
      $("#editFacilityModal").modal('hide');
    } else {
    }
  }

  saveFacility(f: NgForm) {
    if (f.valid) {
      this.router.navigateByUrl('/deals');
    } else {
    }
  }
   cancelFacility(){
     this.router.navigateByUrl('/deals');
   }



}

