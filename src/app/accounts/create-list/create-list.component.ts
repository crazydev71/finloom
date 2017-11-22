import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.services';
import { ToastrService } from '../../_services/toastr.services';

declare const $: any;

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor(private dataService: DataService, private toastrService: ToastrService) { }

  ngOnInit() {

  }

  private Create_List(list_name: String): void {
    if (list_name != '') {
      this.dataService.postData('/api/account-list', { name: list_name, createdBy: 1 })
        .subscribe((resp: any) => {
          this.toastrService.showNotification('List ' + list_name + ' is successfully created', 'success');
        });
    } else {
      this.toastrService.showNotification('List Name is required', 'danger');
    }
  }
}
