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

  constructor(private route: ActivatedRoute, private dataservice: DataService) { }

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
