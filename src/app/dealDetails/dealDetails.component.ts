import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-dealDetails',
  templateUrl: './dealDetails.component.html',
  styleUrls: ['./dealDetails.style.css']
})

export class DealDetailsComponent implements OnInit {
  private sub: any;
  selectedDealId: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.selectedDealId = params['id'];
    });
  }
  
  public ngOnInit() {

  }
}
