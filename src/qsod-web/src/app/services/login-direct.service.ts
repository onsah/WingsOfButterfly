import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginDirectService implements CanActivate {

  constructor(
    private router: Router,
    private loginService: AccountService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (this.loginService.isLoggedIn()) {
      console.log('already logged in');

      this.router.navigate(['main']);

      return false;
    }

    return true;
  }
}
