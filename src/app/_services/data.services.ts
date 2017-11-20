import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  constructor(private http: Http) {
  }

  delete(url: string): Observable<boolean> {
    return this.http.delete(url)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  insertData(url: string, borrower: any): Observable<any> {
    return this.http.post(url, borrower)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getData(url: string, data: any = null): Observable<any> {
    let u = url;
    if (data) {
      let params = new URLSearchParams();
      for (let key in data) {
        params.set(key, data[key]);
      }
      u += '?' + params.toString();
    }
    return this.http.get(u)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  postData(url: string, data: any): Observable<any> {
    return this.http.post(url, data)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  putData(url: string, data: any): Observable<any> {
    return this.http.put(url, data)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  deleteData(url: string): Observable<any> {
    return this.http.delete(url)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  updateInfo(url: string, data: any): Observable<any> {
    return this.http.put(url + '/' + data.Id, data)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

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