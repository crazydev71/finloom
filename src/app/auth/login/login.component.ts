import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../_services/data.services';
import { AuthenticationService } from '../../_services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.style.css']
})

export class LoginComponent implements OnInit {
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  private isLogin: boolean = true;
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
    }
  ];

  constructor(private element: ElementRef,
              private router: Router,
              private fb: FormBuilder,
              private dataService: DataService,
              private authService: AuthenticationService) {

    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
    this.groupData = this.formBuilder();
    this.modelForm = this.fb.group(this.groupData);
  }

  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 200);
  }
  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName('body')[0];
    var sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible == false) {
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }

  signin() {
    if (this.modelForm.invalid) {
      this.errorMsg = "Please fill out all fields and check email format";
      this.isValidConfirm = false;
      return;
    } else {
      this.isValidConfirm = true;
    }
    let _ = this;
    this.authService.isUserAuthenticated(this.modelForm.controls['emailAddr'].value, this.modelForm.controls['password'].value)
      .subscribe((resp: any) => {
        _.router.navigateByUrl('/dashboard');
      },
      function (error) {
        _.errorMsg = "Email or Password is not correct. Please try again";
        _.isValidConfirm = false;
        console.log(error)
      });

  }

  onSlide(value) {
    this.router.navigateByUrl('/auth/register');
  }
  private formBuilder(): any {
    var data = {};
    for (var i = 0; i < this.fields.length; i++) {
      var arr1 = [], arr2 = [];
      arr1[arr1.length] = Validators.required;
      if(this.fields[i].id == 'emailAddr')
        arr1[arr1.length] = Validators.email;
      arr1[arr1.length] = Validators.maxLength(128);
      arr2[arr2.length] = '';
      arr2[arr2.length] = arr1;
      data[this.fields[i].id] = arr2;
    }
    return data;
  }
}
