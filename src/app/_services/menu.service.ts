import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuService {
  public subject = new Subject<any>();

  constructor(private http: Http) {
  }

  handleUpdate(): Observable<any> {
    return this.subject.asObservable();
  }

  // menuUpdate(url): Observable<boolean> {
  //   return this.http.get(url)
  //     .map((res: Response) => {
  //       return res.json();
  //     })
  //     .catch(this.handleError);
  // }

  handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}