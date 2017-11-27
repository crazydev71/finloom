import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent implements OnInit {
  private contactFields: any[] = [ { name: 'firstName', title: 'First Name' }, { name: 'lastName', title: 'Last Name' }, { name: 'primaryEmail', title: 'Email Address' }, { name: 'phoneNumber', title: 'Phone Number' }];
  constructor() { }

  ngOnInit() {
    
  }

}
