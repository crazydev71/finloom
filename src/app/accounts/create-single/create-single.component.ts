import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-single',
  templateUrl: './create-single.component.html',
  styleUrls: ['./create-single.component.css']
})
export class CreateSingleComponent implements OnInit {
  private fields = [
    {
      name: 'AKA Name',
      id: 'aka',
      type: 'input'
    },
    {
      name: 'Legal Name',
      id: 'legalName',
      type: 'input'
    },
    {
      name: 'Short Code',
      id: 'shortCode',
      type: 'input'
    },
    {
      name: 'Email Domain',
      id: 'emailDomain',
      type: 'input'
    },
    {
      name: 'Web Domain',
      id: 'webDomain',
      type: 'input'
    },
    {
      name: 'Legal Address',
      id: 'legalAddress',
      type: 'textarea'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
