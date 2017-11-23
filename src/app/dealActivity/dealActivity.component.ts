import { Component, OnInit } from '@angular/core';
import { TableData } from '../creative/md/md-table/md-table.component';
import { Router, ActivatedRoute } from '@angular/router';
declare const $: any;

@Component({
    selector: 'app-dealAcivity',
    templateUrl: './dealActivity.component.html',
    styleUrls: ['./dealActivity.style.css']
})

export class DealActivityComponent implements OnInit {
    public tableData: TableData;
    public listName: string;
    selectedDealId: number = 0;
    lstActivity: any = [];
    private sub: any;
    
    constructor(private router: Router, private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe(params => {
            this.selectedDealId = params['id'];
        });
    }

    public ngOnInit() {        
        this.listName = 'Deal Activity';
        this.lstActivity = [
            { Id: '38', Type: 'Trade', Description: 'Primary Trade for Home Depot Inc 11/20/2017' }
        ];
    }
}
