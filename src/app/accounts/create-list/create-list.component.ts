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

}
