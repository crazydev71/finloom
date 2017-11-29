import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../_services/data.services';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../_services/authentication.service'
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) { }
  
  public canLoad(){
    
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{    
    let url: string = state.url;
		console.log('Url:'+ url);
		if (this.authService.isUserLoggedIn()) {
			return true; 
		}
    this.authService.setRedirectUrl(url);
    this.router.navigate([this.authService.getLoginUrl()]);
		return false;
  }
}