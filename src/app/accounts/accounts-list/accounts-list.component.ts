import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../_services/data.services';
import { ToastrService } from '../../_services/toastr.services';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  private listId: number;
  private list: any;
  private tableData: any;

  constructor(private route: ActivatedRoute, private dataservice: DataService) {
    this.tableData = {
      headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
      dataRows: [
        ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
        ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
        ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
        ['4', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
      ]
    };
  }

  ngOnInit() {
    let vm = this;
    this.route.params.subscribe(params => {
      vm.listId = params['id'];
      this.dataservice.getData('/api/account-list/' + vm.listId).subscribe((resp: any) => {
        vm.list = resp;
      });
    })
  }

}
