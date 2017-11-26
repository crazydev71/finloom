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
  
  private isValid: boolean = false;

  constructor(private dataService: DataService) {
    this.dataSource = this.initTable(3);
    this.getCollectionViewData(this.dataSource);
    this.checkValidation();
  }
  
  
  ngOnInit() {
            
  }
  getCollectionViewData(data: any) {
    this.data = new wjcCore.CollectionView(data);
  }

  private initTable(count: number): wjcCore.ObservableArray {
    let data = new wjcCore.ObservableArray();
    for (var i = 1; i < count; i++) {
      data.push({
        firstName: '',
        lastName: '',
        primaryEmail: '',
        phoneNumber: '',
        password: ''
      });
    }
    return data;
  }

  private checkValidation(): void {
    let _ = this;
    let validationField = ['firstName', 'lastName', 'primaryEmail', 'phoneNumber', 'password'];
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
  private onMultiSave() {
    var _ = this;
    if (!_.isValid)
      alert("Please fill all required fields.");
    else {
      swal({
        title: 'Do you want to save these contacts?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Save all'
      }).then(function (result) {
        for (var i = 0; i < _.dataSource.length; i++) {
          let contactData: any = {};
          console.log(_.dataSource[i]);
          _.dataService.postData('/api/contact', _.dataSource[i])
          .subscribe((resp: any) => {
            console.log(resp);
          },
          function (error) {
            console.log(error)
          });
        }
        //this.router.navigateByUrl('/contacts/browser');
        _.showNotification('top', 'right', "Contacts are saved successfully.");
      }).catch(function (err) {
        
      });
    }
  }

  private onReset() {
    this.dataSource = this.initTable(3);
    this.getCollectionViewData(this.dataSource);
    this.checkValidation();
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
