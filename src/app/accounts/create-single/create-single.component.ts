import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../_services/data.services';

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
      type: 'input'
    },
    {
      name: 'Legal Name',
      id: 'legalName',
      type: 'input'
    },
    {
      name: 'Short Code',
      id: 'shortCode',
      type: 'input'
    },
    {
      name: 'Email Domain',
      id: 'domain',
      type: 'input'
    },
    {
      name: 'Web Domain',
      id: 'webDomain',
      type: 'input'
    },
    {
      name: 'Legal Address',
      id: 'legalAddress',
      type: 'textarea'
    }
  ]
  constructor(private router: Router,
              private fb: FormBuilder,
              private dataService: DataService) {
    var data = {};
    const emailPattern: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "i");
    for (var i = 0; i < this.fields.length; i ++) {
      var arr1 = [];
      arr1[arr1.length] = Validators.required;
      if(this.fields[i].id != 'domain' && this.fields[i].id != 'webDomain')
        arr1[arr1.length] = Validators.maxLength(128);
      else
        arr1[arr1.length] = Validators.pattern(emailPattern);
      var arr2 = [];
      arr2[arr2.length] = '';
      arr2[arr2.length] = arr1;
      data[this.fields[i].id] = arr2;
    }
    this.modelForm = this.fb.group(data);
  }

  ngOnInit() {
  }

  private createAccount() {
    if (this.modelForm.invalid) {
      return;
    }
    let accData = {};
    for (var i = 0; i < this.fields.length; i ++) {
      if(this.modelForm.controls[this.fields[i].id] != undefined)
        accData[this.fields[i].id] = this.modelForm.controls[this.fields[i].id].value;
    }
    this.dataService.postData('/api/account', accData)
        .subscribe((resp: any) => {
          this.router.navigateByUrl('/accounts/browser');
        },
        function (error) {
          console.log(error)
        }
        );
  }
}
