import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      ele: 'input',
      mode: 'single'
    },
    {
      name: 'Legal Name',
      id: 'legalName',
      ele: 'input',
      mode: 'single'
    },
    {
      name: 'Short Code',
      id: 'shortCode',
      ele: 'input',
      mode: 'single'
    },
    {
      name: 'Email Domain',
      id: 'emailDomain',
      ele: 'input',
      mode: 'multi',
      type: 'email'
    },
    {
      name: 'Web Domain',
      id: 'webDomain',
      ele: 'input',
      mode: 'multi',
      type: 'web'
    },
    {
      name: 'Legal Address',
      id: 'legalAddress',
      ele: 'textarea'
    }
  ];
  private accountTypes = [{ name: 'master', title: 'Master Account' }, { name: 'lob', title: 'Line of business' }, { name: 'sub', title: 'Sub Account' }];
  private selectedType: string = "master";
  private parentId: any;
  private bankType: any;
  private bankTypes;
  private accountType: number = 0;
  private data: any = {};
  private formData = { accountType: 0, paretnId: 0 };
  private emailDomain = [
    {
      id: 1
    }
  ];
  private webDomain = [
    {
      id: 1
    }
  ];
  private groupData: any;

  constructor(private router: Router,
              private fb: FormBuilder,
              private dataService: DataService) {
  }
  
  ngOnInit() {
    this.groupData = this.formBuilder();
    this.modelForm = this.fb.group(this.groupData);

    this.getData();
    this.getBankType();
  }

  private formBuilder(): any {
    var data = {};

    for (var i = 0; i < this.fields.length; i++) {
      var arr1 = [], arr2 = [];
      arr1[arr1.length] = Validators.required;
      arr1[arr1.length] = Validators.maxLength(128);

      arr2[arr2.length] = '';
      arr2[arr2.length] = arr1;
      if (this.fields[i].id == 'emailDomain') {
        for (var j = 0; j < this.emailDomain.length; j++) {
          data[this.fields[i].id + '' + j] = arr2;
        }
      } else if (this.fields[i].id == 'webDomain') {
        for (var j = 0; j < this.webDomain.length; j++) {
          data[this.fields[i].id + '' + j] = arr2;
        }
      }
      else
        data[this.fields[i].id] = arr2;
    }
    return data;
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
          console.log(resp);
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
    let accData: any = {};
    accData.domains = {};
    for (var i = 0; i < this.fields.length; i++) {
      if (this.fields[i].id == 'emailDomain') {
        accData.domains.email = {domains: []};
        accData.domains.email.primary = this.modelForm.controls[this.fields[i].id + '0'].value;
        for (var j = 1; j < this.emailDomain.length; j++) {
          accData.domains.email.domains.push({ name: this.modelForm.controls[this.fields[i].id + '' + j].value });
        }
      } else if (this.fields[i].id == 'webDomain') {
        accData.domains.web = {domains: []};
        accData.domains.web.primary = this.modelForm.controls[this.fields[i].id + '0'].value;
        for (var j = 1; j < this.webDomain.length; j++) {
          accData.domains.web.domains.push({ name: this.modelForm.controls[this.fields[i].id + '' + j].value });
        }
      } else
        accData[this.fields[i].id] = this.modelForm.controls[this.fields[i].id].value;
    }
    accData['accountType'] = this.selectedType;
    accData['parentId'] = this.parentId;
    accData['bankTypes'] = this.bankType;

    if (accData) {
      this.dataService.postData('/api/account/create', accData)
        .subscribe((resp: any) => {
          this.router.navigateByUrl('/accounts/browser');
        },
        function (error) {
          console.log(error)
        });
    }
  }

  private changeFormData(index, key): void {
    this.formData[key] = index + 1;
  }

  private addDomain(domainType: string): void {
    let id = domainType == 'email' ? this.emailDomain.length : this.webDomain.length;
    let arr1 = [], arr2 = [];

    arr1[arr1.length] = Validators.required;
    arr1[arr1.length] = Validators.maxLength(128);

    arr2[arr2.length] = '';
    arr2[arr2.length] = arr1;

    id++;
    if (domainType == 'email') {
      this.emailDomain = this.emailDomain.concat({
        id: id
      });
      //this.groupData['emailDomain' + (id - 1)] = arr2;
      let control = new FormControl();
      this.modelForm.addControl('emailDomain' + (id - 1), control);
    } else {
      this.webDomain = this.webDomain.concat({
        id: id
      });
      let control = new FormControl();
      this.modelForm.addControl('webDomain' + (id - 1), control);
    }
  }

  private removeDomain(domainType: string, delId: number): void {
    if (domainType == 'email') {
      this.emailDomain.splice(delId, 1);
      this.modelForm.removeControl('emailDomain' + delId);
    } else {
      this.webDomain.splice(delId, 1);
      this.modelForm.removeControl('webDomain' + delId);
    }
  }
}
