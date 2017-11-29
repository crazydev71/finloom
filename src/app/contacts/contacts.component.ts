import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import { DataService } from '../_services/data.services';
import { ToastrService } from '../_services/toastr.services';
declare const $: any;
declare var swal: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private contact_name = "My Contact";

  private contacts = [
    {name: "Bank of America"},
    {name: "Bank of United Kingdom"}
  ];

  tableData: any = {
    headerRow: ['#', '', 'First Name', 'Last Name', 'Primary Email','Phone Number', '...'],
    dataRows: [],
    domains: []
  };
  private contactFields: any[] = [ { name: 'firstName', title: 'First Name' }, { name: 'lastName', title: 'Last Name' }, { name: 'primaryEmail', title: 'Primary Email' }, { name: 'phoneNumber', title: 'Phone Number' }];
  private contact_bank = 'Bank of America,Bank of United Kingdom'.split(',');
  private selected: any = { contact: {} };
  private isEdit: boolean = false;
  private contactList;

  constructor (private router: Router, private dataService: DataService, private toastrService: ToastrService) {
    this.router.navigateByUrl('/contacts/browser');
  }

  ngOnInit() {
    this.getContactList();
    this.getData();
  }
  private getData() {
    this.dataService.getData('/api/contact').subscribe((resp: any) => {
      this.tableData.dataRows = resp;
    });
  }
  
  private getContactList() {
    this.dataService.getData('/api/contact-list')
      .subscribe((resp: any) => {
        this.contactList = resp;
      },
      function (error) {
        console.log(error)
      });
  }

  public choose_contact(name: string): void {
    this.contact_name = name;
  }

  onChange(id, name): void {
    let checked = [];
    for (let i = 0; i < this.tableData.dataRows.length; i++) {
      let row = this.tableData.dataRows[i];
      if (row.isChecked) {
        checked.push(row.id);
      }
    }
    console.log(checked);
    if (checked.length) {
      this.dataService.putData('/api/contact-list/' + id, {ContactIds: checked})
        .subscribe(resp => {
          console.log(resp);
          this.toastrService.showNotification('Contacts successfully add to "' + name + '"', 'success');
          this.router.navigateByUrl('/contacts/contactlist/' + id);
        });
    } else {
      alert('At least one account need to be selected!');
    }
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
      _.dataService.deleteData('/api/contact/' + id)
        .subscribe((resp: any) => {
          _.toastrService.showNotification('contact successfully deleted', 'success');
        },
        function (error) {
          _.toastrService.showNotification('Server Error', 'danger');
        });
    }).catch(function (err) {
      
    });
  }

  onDetail(row): void {
    console.log(row);
    this.selected.contact = Object.assign({}, row);
  }
  onSave() {
    if(!this.validateEmail(this.selected.contact.primaryEmail)) {
      alert("Email format is not correct");
      return;
    }
    this.dataService.putData('/api/contact/' + this.selected.contact.id, this.selected.contact)
      .subscribe((resp: any) => {
        this.selected.contactRef = this.tableData.dataRows.filter(row => {
          return row.id == this.selected.contact.id;
        })[0];
        for (let key in this.selected.contactRef) {
          this.selected.contactRef[key] = this.selected.contact[key];
        }
        this.isEdit = false;
        this.toastrService.showNotification('Contact successfully updated', 'success');
      },
      function (error) {
        this.toastrService.showNotification('Server error', 'danger');
      });
  }
  private detailStatus(status: string): void {
    if (status == 'edit')
      this.isEdit = !this.isEdit;
    else if (status == 'cancel')
      this.isEdit = false;
    else {      
      this.onSave();
    }
  }
  public validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  public group_By(group_name: string) {
    
  }
}
