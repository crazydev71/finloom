import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';

declare interface ValidatorFn {
    (c: AbstractControl): {
        [key: string]: any;
    };
}
declare interface User {
    text?: string; // required, must be 5-8 characters
    email?: string; // required, must be valid email format
    password?: string; // required, value must be equal to confirm password.
    confirmPassword?: string; // required, value must be equal to password.
    number?: number; // required, value must be equal to password.
    url?: string;
    idSource?: string;
    idDestination?: string;
    optionsCheckboxes?: boolean;
}

@Component({
    selector: 'app-addDeal',
    templateUrl: './addDeal.component.html',
    styleUrls: ['./addDeal.style.css']
})

export class AddDealComponent implements OnInit {


    constructor(private formBuilder: FormBuilder) {
      
    }

    public typeValidation: User;
    deal: FormGroup;
    facility: FormGroup;
    public dealModel: any = {dealName:"",dealAlias:"",dealAmount:0};
    public currency: any[] = [
        { value: '1', text: 'USD' },
        { value: '2', text: 'GBP' },
        { value: '3', text: 'INR' },
        { value: '4', text: 'EUR' },
        { value: '5', text: 'JPY' },
      ];
      public status: any[] = [
        { value: 'Active', text: 'Active' },
        { value: 'Pending', text: 'Pending' },
        { value: 'Terminated', text: 'Terminated' },
        { value: 'Complete', text: 'Complete' }
      ];

    isFieldValid(form: FormGroup, field: string) {
        return !form.get(field).valid && form.get(field).touched;
    }

    displayFieldCss(form: FormGroup, field: string) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    }

   
    onDealSubmit(){
        debugger;
        console.log(this.deal);
        if (this.deal.valid && this.facility.valid) {
            console.log('form submitted');
        } else {
            this.validateAllFormFields(this.deal);
            this.validateAllFormFields(this.facility);
        }
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            console.log(field);
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
    ngOnInit() {
            this.deal = this.formBuilder.group({
                // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
                dealName: [null, Validators.required],
                dealAlias: [null, Validators.required],
                dealAmount: [null, Validators.required],
                dealBorrower:[null, Validators.required],
                dealLeadArranger:[null, Validators.required],
                dealAdminAgent: [null, Validators.required],
                dealCurrency: [null, Validators.required],
                dealStatus: [null, Validators.required]            
            });

            this.facility = this.formBuilder.group({
                facilityName: [null, Validators.required],
                facilityAlias: [null, Validators.required],
                facilityCommitment: [null, Validators.required],
                facilityCurrency:[null, Validators.required],
                facilityBorrower:[null, Validators.required]     
            });
    }


}
