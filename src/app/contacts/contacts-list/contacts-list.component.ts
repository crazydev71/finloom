import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../_services/data.services';
import { ToastrService } from '../../_services/toastr.services';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private listId: number;
  private list: any = {};
  private tableData: any;

  constructor(private route: ActivatedRoute, private dataservice: DataService, private toastrservice: ToastrService) {
    this.tableData = {
      headerRow: ['#', '', 'First Name', 'Last Name', 'Primary Email', 'Phone Number', ' '],
      dataRows: []
    };
  }

  ngOnInit() {
    let vm = this;
    this.route.params.subscribe(params => {
      vm.listId = params['id'];
      // this.dataservice.getData('/api/account-list/detail/' + vm.listId).subscribe((resp: any) => {
      //   vm.list = resp.accountList;
      //   vm.tableData.dataRows = resp.accounts.map(account => {
      //     return account.Account;
      //   });
      // });
    })
  }

  onDeleteSelected() {
    let checked = [];
    for (let i = 0; i < this.tableData.dataRows.length; i++) {
      let row = this.tableData.dataRows[i];
      if (row.isChecked) {
        checked.push(row.id);
      }
    }
    if (checked.length) {
      this.dataservice.postData('/api/account-list/delete/' + this.listId, { data: { accountIds: checked } })
        .subscribe(resp => {
          this.tableData.dataRows = this.tableData.dataRows.filter(row => {
            return checked.indexOf(row.id) == -1;
          })
          this.toastrservice.showNotification('Accounts successfully deleted', 'success');
        });
    } else {
      alert('At least one account need to be selected!');
    }
  }

  onDelete(id, name) {
    this.dataservice.postData('/api/account-list/delete/' + this.listId, { data: { accountIds: [id] } })
      .subscribe(resp => {
        this.tableData.dataRows = this.tableData.dataRows.filter(row => {
          return id != row.id;
        })
        this.toastrservice.showNotification('Account successfully deleted', 'success');
      });
  }
}
