import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.services';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    
  }

  private Create_List(list_name: String) :void {
    if(list_name != '') {
      this.dataService.postData('/api/account-list', {name: list_name, createdBy: 1})
          .subscribe((resp: any) => {
            
          });
    }
  }
}
