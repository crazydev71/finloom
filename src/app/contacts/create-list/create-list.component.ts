import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../_services/data.services';
import { MenuService } from '../../_services/menu.service';
import { ToastrService } from '../../_services/toastr.services';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor (private router: Router, private dataService: DataService, private menuservice: MenuService, private toastrService: ToastrService) { }

  ngOnInit() {
  }
  
  private Create_List(list_name: String): void {
    if (list_name != '') {
      this.dataService.postData('/api/contact-list', { name: list_name, status: 1 })
        .subscribe((resp: any) => {
          console.log(resp);
          this.toastrService.showNotification('List "' + list_name + '" is successfully created', 'success');
          this.menuservice.subject.next({menu: 'update'});
          this.router.navigateByUrl('/contacts/contactlists/' + resp.id);
        },
        function (error) {
          console.log(error)
        });
    } else {
      this.toastrService.showNotification('"List Name" is required', 'danger');
    }
  }
}
