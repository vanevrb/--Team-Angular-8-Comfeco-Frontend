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
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private saveLocal: SaveLocalService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.saveLocal
      .getItem(environment.LOCAL_KEY_FOR_SAVE)
      .then((val: string) => {
        if (!val) {
          throw new Error('Invalid Token');
        }
        this.userService.accessToken = val;
        return this.authService.getUserInfo(val).toPromise();
      })
      .then((data: Response) => {
        if (data.error) {
          throw new Error('Invalid User');
        }
        this.userService.user = data.message;
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
