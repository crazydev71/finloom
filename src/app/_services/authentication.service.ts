import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  private redirectUrl: string = '/';
  private isloggedIn: boolean = false;
  private loginUrl: string = '/auth/login';

  constructor(private http: Http, private router: Router) {
    if(localStorage.getItem('currentUser')) {
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }
  }
  isUserLoggedIn(): boolean {
		return this.isloggedIn;
  }
  setRedirectUrl(url: string): void {
		this.redirectUrl = url;
  }
  getLoginUrl(): string {
		return this.loginUrl;
  }
  isUserAuthenticated(email: string, password:string): Observable<boolean> {
    let postData = {
      email: email,
      password: password
    }
    return this.http.post('/api/login', postData)
      .map((user: Response) => {
        if(user) {
          this.isloggedIn = true;
          console.log(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
				} else {
					this.isloggedIn = false;
				}
				return this.isloggedIn;     
      });
  }

  signup(email: string, password: string) {
    var postData = {
      email: email,
      password: password
    }
    return this.http.post('/api/signup', postData)
    .map((user: Response) => {
      if(user) {
        this.isloggedIn = true;
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        this.isloggedIn = false;
      }
      return this.isloggedIn;     
    });
  }
  private userAuthChanged(status: boolean) {
    this.authChanged.emit(status); //Raise changed event
  }

  logout() {
    this.http.get('/api/logout')
    .subscribe((resp: any) => {
      localStorage.removeItem('currentUser');
      this.router.navigateByUrl('/auth/login');
    },
    function (error) {
      
    });
  }
}