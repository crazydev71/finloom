import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../_services/data.services';
import { Account, AccountList, BankType, Industry } from '../../shared/interfaces/model';

@Component({
  selector: 'app-create-single',
  templateUrl: './create-single.component.html',
  styleUrls: ['./create-single.component.css']
})
export class CreateSingleComponent implements OnInit {
  private modelForm: FormGroup;
  private fields = [
    {
      name: 'AKA Name',
      id: 'aka',
      type: 'input',
      mode: 'single'
    }, 
    {
      name: 'Legal Name',
      id: 'legalName',
      type: 'input',
      mode: 'single'
    },
    {
      name: 'Short Code',
      id: 'shortCode',
      type: 'input',
      mode: 'single'
    },
    {
      name: 'Email Domain',
      id: 'domain',
      type: 'input',
      mode: 'multi'
    },
    {
      name: 'Web Domain',
      id: 'webDomain',
      type: 'input',
      mode: 'multi'
    },
    {
      name: 'Legal Address',
      id: 'legalAddress',
      type: 'textarea'
    }
  ];
  private accountTypes = [{name: 'MA', title: 'Master Account'}, {name: 'LOB', title: 'Line of business'}, {name: 'SA', title: 'Sub Account'}];
  private bankTypes;
  private accountType: number = 0;
  private data: any = {};
  private formData = {accountType: 0, paretnId: 0};
  private emailDomain = [
    {
      id:1
    }
  ];
  private webDomain = [
    {
      id:1
    }
  ];
  constructor(private router: Router,
    private fb: FormBuilder,
    private dataService: DataService) {
    var data = {};
    
    for (var i = 0; i < this.fields.length; i++) {
      var arr1 = [], arr2 = [];
      arr1[arr1.length] = Validators.required;
      arr1[arr1.length] = Validators.maxLength(128);
      
      arr2[arr2.length] = '';
      arr2[arr2.length] = arr1;
      data[this.fields[i].id] = arr2;
    }
    this.modelForm = this.fb.group(data);
  }

  ngOnInit() {
    this.getData();
    this.getBankType();
  }

  public getData() {
    let parent = this;
    this.dataService.getData('/api/account').subscribe((resp: any) => {
      parent.data.accounts = resp;
    });
    parent.data.accountLists = [];
    parent.data.bankTypes = [];
    parent.data.industries = [];
  }
  
  private getBankType() {
    this.dataService.getData('/api/banktype')
    .subscribe((resp: any) => {
      this.bankTypes = resp;
    },
    function (error) {
      console.log(error)
    });
  }

  private createAccount(): void {
    if (this.modelForm.invalid) {
      return;
    }
    let accData = {};
    for (var i = 0; i < this.fields.length; i++) {
      if (this.modelForm.controls[this.fields[i].id] != undefined)
        accData[this.fields[i].id] = this.modelForm.controls[this.fields[i].id].value;
    }
    this.dataService.postData('/api/account', accData)
      .subscribe((resp: any) => {
        this.router.navigateByUrl('/accounts/browser');
      },
      function (error) {
        console.log(error)
      });
  }

  private changeFormData (index, key): void {
    this.formData[key] = index + 1;
  }

  private addDomain(domainType: string): void {
    let id = domainType == 'email' ? this.emailDomain.length : this.webDomain.length;
    if(domainType == 'email') {
      id ++;
      this.emailDomain = this.emailDomain.concat({
        id: id
      });
    } else {
      this.webDomain = this.webDomain.concat({
        id: id
      });
    }
  }

  private removeDomain(domainType: string, delId: number): void {
    if(domainType == 'email') {
      this.emailDomain.splice(delId, 1);
    } else {
      this.webDomain.splice(delId, 1);
    }
  }


}
