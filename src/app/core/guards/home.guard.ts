import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  CanActivate,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate, CanDeactivate<unknown>, CanLoad {
  private user$: Observable<string | undefined>;
  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.user$;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
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
  canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    return this.userService
      .userInfo()
      .then((data) => {
        if (!data) {
          this.router.navigateByUrl('/');
          return false;
        }

        return true;
      })
      .catch((err) => false);
  }
}
