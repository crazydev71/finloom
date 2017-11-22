import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private contact_name = "My Contact";

  private contacts = [
    {name: "Bank of America"},
    {name: "Bank of United Kingdom"}
  ];

  private account_name = 'Rechard Del,Sachie Clark,Trant Blarkey,Tae Carrilio,Ryone Cloke,Rahul Dickstein'.split(',');
  private account_email = 'Test1@gmail.com,Test2@gmail.com,Test3@gmail.com,Test4@gmail.com,Test5@gmail.com'.split(',');
  private contact_bank = 'Bank of America,Bank of United Kingdom'.split(',');
  
  private group_list = [
    {
      title: 'No Grouping',
      value: '',
      checked: 'false'
    },
    {
      title: 'By MA and by LOB and by SA',
      value: 'MA,LOB,SA',
      checked: 'true'
    },
    
  ]
  public data = [];
  private view;
  
  constructor (private router: Router) { 
    this.router.navigateByUrl('/contacts/contact');    
  }

  ngOnInit() {
    this.data = this.getData();
    this.view = new wjcCore.CollectionView(this.data, {
      sortDescriptions: [new wjcCore.SortDescription('sales', false)]
    });
    
    // initialize item count display
    this.view.onCollectionChanged();
    var theGrid = new wjcGrid.FlexGrid('#theGrid', {
      itemsSource: this.view,
      allowAddNew: true,
      allowDelete: true,
      showAlternatingRows: false,
      headersVisibility: 'Row'
    });
  }

  public choose_contact(name: string): void {
    this.contact_name = name;
  }

  public getData() {
    var data = [];
    return data;
  }

  public group_By(group_name: string) {
    this.view.groupDescriptions.clear();
    
    // add the new groups
		var props = group_name.split(',');
    for (var i = 0; i < props.length; i++) {
    	var prop = props[i];
      
      // group sales by value ranges
      var gd;
    	gd = new wjcCore.PropertyGroupDescription(prop);
      this.view.groupDescriptions.push(gd);
    }
  }
}
