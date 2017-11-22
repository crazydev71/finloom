import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html'
})

export class ConfirmModalComponent implements OnInit {
  @Input() data: any;
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  private types: any = {
    delete: {
      message: 'Do you want to delete this?',
      btnYes: 'Yes',
      btnNo: 'No'
    },
    edit: {
      message: 'Input Name',
      btnYes: 'Save',
      btnNo: 'Cancel'
    }
  };
  showData: any = {};
  input: any = {};

  constructor () {
  }

  ngOnInit () {
    this.showData = this.types[this.data.type];
    this.showData.type = this.data.type;
    this.showData.name = this.data.name;
  }

  onConfirm (flag: boolean) {
    this.confirm.emit((this.data.name && flag) ? this.data.name : flag);
  }
}