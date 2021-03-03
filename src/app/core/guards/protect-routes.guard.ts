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

import { UserService } from '../services/user.service';
import { UsersInfoResponse, TokenResponse, Response } from '../interfaces';
import { AuthService } from '../services/auth.service';
import { SaveLocalService } from '../services/save-local.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProtectRoutesGuard
  implements CanActivate, CanDeactivate<unknown>, CanLoad {
  // private user$: Observable<UsersInfoResponse | undefined>;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private saveLocal: SaveLocalService
  ) {
    // this.user$ = this.userService.user$;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.saveLocal
      .getItem(environment.LOCAL_KEY_FOR_SAVE)
      .then((val: TokenResponse) => {
        if (!val.access_token) {
          throw new Error('Invalid Token');
        }
        return this.authService.getUserInfo(val.access_token).toPromise();
      })
      .then((data: Response) => {
        if (data.error) {
          throw new Error('Invalid User');
        }
        this.userService.user = data.message;
        console.log(data);
        return true;
      })
      .catch((err) => {
        return false;
      });
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
