import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../_services/data.services';
import { AuthenticationService } from '../../_services/authentication.service';

declare var $: any;

@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['../auth.style.css']
})

export class RegisterComponent implements OnInit {
    private modelForm: FormGroup;
    private groupData: any;
    private isValidConfirm: boolean = true;
    private errorMsg: string;
    private fields = [
        {
            name: 'Email Address',
            id: 'emailAddr',
            ele: 'input',
        },
        {
            name: 'Password',
            id: 'password',
            ele: 'input'
        },
        {
            name: 'Confirm',
            id: 'confirm',
            ele: 'input'
        }
    ];

    constructor(private router: Router,
        private fb: FormBuilder,
        private dataService: DataService,
        private authService: AuthenticationService) {

    }

    ngOnInit() {
        this.groupData = this.formBuilder();
        this.modelForm = this.fb.group(this.groupData);
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 200);
    }

    signup() {
        let _ = this;
        if (this.modelForm.invalid) {
            this.errorMsg = "Please fill out all fields and check email format";
            this.isValidConfirm = false;
            return;
        } else {
            this.isValidConfirm = true;
        }

        if (this.modelForm.controls['password'].value != this.modelForm.controls['confirm'].value) {
            this.errorMsg = "Incorrect confirm password!";
            this.isValidConfirm = false;
            return;
        } else {
            this.isValidConfirm = true;
        }

        if (this.modelForm.controls['password'].value.length < 3) {
            this.errorMsg = "Password length must be 3 characters at least";
            this.isValidConfirm = false;
            return;
        } else {
            this.isValidConfirm = true;
        }

        this.authService.signup(this.modelForm.controls['emailAddr'].value, this.modelForm.controls['password'].value)
            .subscribe((resp: any) => {
                _.router.navigateByUrl('/dashboard');
            },
            function (error) {
                if (error._body == "Unauthorized") {
                    _.errorMsg = "Email is already existed";
                    _.isValidConfirm = false;
                }
                console.log(error)
            });
    }

    onSlide(value) {
        this.router.navigateByUrl('/auth/login');
    }

    private formBuilder(): any {
        var data = {};
        for (var i = 0; i < this.fields.length; i++) {
            var arr1 = [], arr2 = [];
            arr1[arr1.length] = Validators.required;
            if (this.fields[i].id == 'emailAddr')
                arr1[arr1.length] = Validators.email;
            arr1[arr1.length] = Validators.maxLength(128);
            arr2[arr2.length] = '';
            arr2[arr2.length] = arr1;
            data[this.fields[i].id] = arr2;
        }
        return data;
    }
}
