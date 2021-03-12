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

import { Observable, of, from } from 'rxjs';

import { UserService } from '../services/user.service';
import { UsersInfoResponse, TokenResponse, Response } from '../interfaces';
import { AuthService } from '../services/auth.service';
import { SaveLocalService } from '../services/save-local.service';
import { environment } from '../../../environments/environment';
import { EditInfoService } from '../services/edit-info.service';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { AppStateWithUsers } from '../../store/reducers/index';
import { Store } from '@ngrx/store';
import { usersActions } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root',
})
export class ProtectRoutesGuard
  implements CanActivate, CanDeactivate<unknown>, CanLoad {
  constructor(
    private router: Router,
    private editInfo: EditInfoService,
    private saveLocal: SaveLocalService,
    private store: Store<AppStateWithUsers>
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
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return from(this.saveLocal.getItem(environment.LOCAL_KEY_FOR_SAVE)).pipe(
      map((token) => {
        if (!token) {
          return false;
        }
        return true;
      }),
      catchError((err) => of(false)),
      tap((flag) => {
        if (!flag) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
