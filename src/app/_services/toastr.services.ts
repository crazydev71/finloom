import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

declare const $: any;

@Injectable()
export class ToastrService {
  constructor(private http: Http) {
  }

  showNotification(message: string, type: string = null, from: string = 'top', align: string = 'right') {
    const types = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
    const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: message
    }, {
        type: type ? type : types[color],
        timer: 3000,
        placement: {
          from: from,
          align: align
        }
      });
  }
}