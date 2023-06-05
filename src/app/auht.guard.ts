import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   *
   * @param route
   * @param state
   *
   * this method is specifically to protect the parent and its children components,
   * this method is call automatically by Angular
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService
      .isAuthenticated()
      .then((isAuthenticated: boolean) => {
        if (isAuthenticated) return true;
        else {
          this.router.navigate(['/']);
          return false; // this avoid the original navigation from happening anyways
        }
      });
  }

  /**
   *
   * @param childRoute
   * @param state
   *
   * this method is specifically to protect children routes,
   * this method is call automatically by Angular
   */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
