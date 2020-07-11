import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._authService.loggedIn()) {
      var data = this._authService.currentUserSubject.getValue();
      if (route.data.roles.indexOf(data.userType) > -1) {
        return true;
      }
      else {
        //  Navigate to specific route according to user role
        return false;
      }
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
