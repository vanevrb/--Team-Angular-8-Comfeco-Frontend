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
import { EditInfoService } from '../services/edit-info.service';

@Injectable({
  providedIn: 'root',
})
export class ProtectRoutesGuard
  implements CanActivate, CanDeactivate<unknown>, CanLoad {
  constructor(
    private router: Router,
    private editInfo: EditInfoService,
    private saveLocal: SaveLocalService
  ) {}

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
    return this.saveLocal
      .getItem(environment.LOCAL_KEY_FOR_SAVE)
      .then((token) => {
        if (!token) {
          throw new Error('Se necesita registro / login validos');
        }
        return this.editInfo.getUserInfo(token).toPromise();
      })
      .then((data) => {
        if (data.error) {
          throw new Error('Se necesita registro / login validos');
        }
        return true;
      })
      .catch((err) => {
        console.error(err.message);
        this.router.navigateByUrl('/');
        return false;
      });
  }
}
