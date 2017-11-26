import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../_services/data.services';
import { ToastrService } from '../../_services/toastr.services';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  private modelForm: FormGroup;
  private groupData: any;
  private fields = [
    {
      name: 'First Name',
      id: 'firstName',
      ele: 'input',
      mode: 'single'
    },
    {
      name: 'Last Name',
      id: 'lastName',
      ele: 'input',
      mode: 'single'
    },
    {
      name: 'Email Address',
      id: 'primaryEmail',
      ele: 'input',
      mode: 'single'
    },
    {
      name: 'Phone Number',
      id: 'phoneNumber',
      ele: 'input',
      mode: 'single'
    },
    {
      name: 'Old Password',
      id: 'password',
      ele: 'password',
      mode: 'single'
    },
    {
      name: 'Confirm Password',
      id: 'confirm',
      ele: 'password',
      mode: 'single'
    }
  ];

  constructor(private router: Router,
    private fb: FormBuilder,
    private dataService: DataService,
    private toastrService: ToastrService) {

  }

  ngOnInit() {
    this.groupData = this.formBuilder();
    this.modelForm = this.fb.group(this.groupData);
  }

  private formBuilder(): any {
    var data = {};
    for (var i = 0; i < this.fields.length; i++) {
      var arr1 = [], arr2 = [];
      arr1[arr1.length] = Validators.required;
      if(this.fields[i].id == 'primaryEmail')
        arr1[arr1.length] = Validators.email;      
      else
        arr1[arr1.length] = Validators.maxLength(128);
      arr2[arr2.length] = '';
      arr2[arr2.length] = arr1;
      
      data[this.fields[i].id] = arr2;
    }
    return data;
  }

}
