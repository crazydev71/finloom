import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../_services/data.services';
import { MenuService } from '../../_services/menu.service';
import { ToastrService } from '../../_services/toastr.services';
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: 'app-create-single',
  templateUrl: './create-single.component.html',
  styleUrls: ['./create-single.component.css']
})
export class CreateSingleComponent implements OnInit {
  private modelForm: FormGroup;
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
      name: 'Primary Email',
      id: 'primaryEmail',
      ele: 'input',
      mode: 'single'
    },
    {
      name: 'Phone Number',
      id: 'phoneNumber',
      ele: 'input',
      mode: 'single'
    }
  ];

  private data: any = {};

  private groupData: any;

  constructor(private router: Router,
              private fb: FormBuilder,
              private dataService: DataService,
              private menuservice: MenuService, 
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

  private createAccount(): void {
    if (this.modelForm.invalid) {
      return;
    }

    let contactData: any = {};
    for (var i = 0; i < this.fields.length; i++) {
      contactData[this.fields[i].id] = this.modelForm.controls[this.fields[i].id].value;
    }
    this.dataService.postData('/api/contact', contactData)
    .subscribe((resp: any) => {
      this.router.navigateByUrl('/contacts/browser');
    },
    function (error) {
      console.log(error)
    });
  }

}
