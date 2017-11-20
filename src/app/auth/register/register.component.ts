import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['../auth.style.css']
})

export class RegisterComponent implements OnInit {
    test: Date = new Date();

    constructor (private router: Router) {
        //
    }

    ngOnInit() {
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 200);
    }
    
    onSubmit() {
        this.router.navigateByUrl('/dashboard');
    }
    
    onSlide(value) {
        this.router.navigateByUrl('/auth/login');
    }
}
