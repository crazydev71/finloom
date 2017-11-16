import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: Http, private router: Router) { }

  login(email: string, password: string) {
    var postData = {
      email: email,
      password: password
    }
    return this.http.post('/api/users/login', postData)
      .map((res: Response) => {
        let result = res.json();
        console.log(result);
        if (result.status == "error") {
          return result;
        }
        else if (result.status == "success") {
          let user = result.info[0];
          console.log(user);
          // localStorage.setItem('currentUser', JSON.stringify({username: user.Email,firstName:user.firstName, lastName:user.lastName}));
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userAuthChanged(true);
          return result;
        }

      });
  }
  signup(firstName: string, lastName: string, email: string, password: string) {
    var postData = {
      firstName: firstName,
      lastName: lastName,
      Email: email,
      Password: password
    }
    console.log(postData);
    return this.http.post('/api/users/signup', postData)
      .map((res: Response) => {
        let result = res.json();
        //localStorage.setItem('currentUser', JSON.stringify({username: username}));
        //this.userAuthChanged(true);
        console.log(result);
        return result;
      });
  }
  private userAuthChanged(status: boolean) {
    this.authChanged.emit(status); //Raise changed event
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/auth/signin');
  }
}