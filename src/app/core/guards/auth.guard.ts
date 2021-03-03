import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';
import { UsersInfoResponse } from '../interfaces/UsersInfo';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown>, CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.userService
      .userInfo()
      .then((data) => {
        if (!data) {
          return true;
        }
        this.router.navigateByUrl('/home');
        return false;
      })
      .catch((err) => true);
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
