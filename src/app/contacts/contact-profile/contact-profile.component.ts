import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.services';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent implements OnInit {
  private contactFields: any[] = [ { name: 'firstName', title: 'First Name' }, { name: 'lastName', title: 'Last Name' }, { name: 'primaryEmail', title: 'Email Address' }, { name: 'phoneNumber', title: 'Phone Number' }];
  public currentUser: any = {primaryEmail: null,firstName: null,lastName: null, phoneNumber: null};

  constructor(private dataservice: DataService) { }
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    let _ = this;
    _.dataservice.getData('/api/auth')
    .subscribe(resp => {
      _.currentUser = resp;
      console.log(_.currentUser);
    });
  }
}
