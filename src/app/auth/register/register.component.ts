import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    test: Date = new Date();

    constructor (private router: Router) {
        //
    }

    ngOnInit() {
    }
    
    onSubmit() {
        this.router.navigateByUrl('/accounts');
    }
    
    onSlide(value) {
        this.router.navigateByUrl('/auth/login');
    }
}
