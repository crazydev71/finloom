import { Component, OnInit } from '@angular/core';
import { TableData } from '../creative/md/md-table/md-table.component';
import { Router, ActivatedRoute } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.style.css']
})

export class DealsComponent implements OnInit {
  public tableData: TableData;
  public listName: string;
  
  constructor(private router: Router) {

  }

  public ngOnInit() {
    this.tableData = {
      headerRow: ['ID', 'Name', 'Agent bank', 'Syndicate Bank', 'Status'],
      dataRows: [
        ['1', 'JPM Chase 10/15/2017', 'PNC Bank', 'Barclays', 'Complete'],
        ['2', 'fin Bank NY 10/16/2017', ' FinLoom Inc', ' FinLoom Inc', 'Pending'],
        ['3', 'PricelIne Co 10/16/2017', 'Deutsche Bank AG', 'Wellsfargo & Company', 'Complete'],
        ['4', 'Reliance Industries Limited 10/23/2017', 'JP Morgan Chase', 'JP Morgan Chase', 'Pending']
      ]
    };
    this.listName = 'Deal List';
  }

  openDetails = function (Id: any) {
    this.router.navigate(['/dealDetails/' + Id]);
  }

  createDeal = function(){
    this.router.navigate(['/dealWizard']);
  }
}
