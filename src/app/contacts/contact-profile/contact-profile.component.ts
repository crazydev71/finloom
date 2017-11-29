import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../_services/data.services';
import { ToastrService } from '../../_services/toastr.services';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent implements OnInit {
  private sel_account = {id: null, title: "Account"};
  private sel_flm = {id: null, title: "Flm Role"};
  private sel_pp = {id: null, title: "P/P"};
  private contactFields: any[] = [ { name: 'firstName', title: 'First Name' }, { name: 'lastName', title: 'Last Name' }, { name: 'primaryEmail', title: 'Email Address' }, { name: 'phoneNumber', title: 'Phone Number' }];
  private isEdit: boolean = false;
  private currentUser: any = {primaryEmail: null,firstName: null,lastName: null, phoneNumber: null};

  private accounts;
  private ppField = [ {name: 'Private Only' }, { name: 'Public Only' }, { name: 'Any (Private & Public)' }];
  private flmRoles;

  private isAdminRole: boolean = false;
  private isDefaultInviate: boolean = false;
  private modelForm: FormGroup;

  constructor(private router: Router, private dataService: DataService, private toastrService: ToastrService) { }
  ngOnInit() {
    this.getCurrentUser();
    this.getFlmRoles();
  }

  getCurrentUser() {
    let _ = this;
    _.dataService.getData('/api/auth')
    .subscribe(resp => {
      _.currentUser = resp;
      _.isAdminRole = _.currentUser.isAdminAccount == 1 ? true: false;
      _.isDefaultInviate = _.currentUser.defaultInvitee == 1 ? true: false;
      _.sel_pp.title = _.ppField[_.currentUser.isPublic].name;
    });
  }
  getFlmRoles() {
    let _ = this;
    _.dataService.getData('/api/role')
    .subscribe(resp => {
      _.flmRoles = resp;
      console.log(_.flmRoles);
    });
  }
  onChange(menuName: string, index: number) {
    switch(menuName) {
      case 'account':
        this.sel_account.title = this.accounts[index].name;
        this.sel_account.id = this.accounts[index].id;
        break;
      case 'flm':
        this.sel_flm.title = this.flmRoles[index].name;
        this.sel_flm.id = this.flmRoles[index].id;
        break;
      case 'pp':
        this.sel_pp.title = this.ppField[index].name;
        break;
    }
  }
  onSave() {
    let update_data = {};
    let userInfo = JSON.parse(JSON.parse(localStorage.getItem('currentUser'))['_body']);
    
    update_data = this.currentUser;
    update_data['accountId'] = this.sel_account.id;
    update_data['roleId'] = this.sel_flm.id;
    update_data['isAdminAccount'] = this.isAdminRole ? 1: 0;
    if(this.sel_pp.title ==  'Private Only')
      update_data['isPublic'] = 0;
    else if(this.sel_pp.title == 'Public Only')
      update_data['isPublic'] = 1;
    else
      update_data['isPublic'] = 2;
    update_data['defaultInvitee'] = this.isDefaultInviate ? 1: 0;

    this.dataService.putData('/api/contact/' + userInfo.id, update_data)
    .subscribe((resp: any) => {
      this.isEdit = false;
      this.toastrService.showNotification('Your profile successfully updated', 'success');
    },
    function (error) {
      this.toastrService.showNotification('Server error', 'danger');
    });
  }
  private profileStatus(status: string): void {
    if (status == 'edit')
      this.isEdit = !this.isEdit;
    else if (status == 'cancel')
      this.isEdit = false;
    else {
      this.onSave();
    }
  }
}
