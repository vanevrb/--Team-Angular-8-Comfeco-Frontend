import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  Router,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  UrlTree,
} from '@angular/router';

import { EditInfoService } from '../services/edit-info.service';
import { SaveLocalService } from '../services/save-local.service';

import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { AppStateWithUsers } from '../../store/reducers/index';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private editInfo: EditInfoService,
    private router: Router,
    private store: Store<AppStateWithUsers>,
    private saveLocal: SaveLocalService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select('user').pipe(
      map((user) => {
        if (!user || !user.loaded) {
          return true;
        }
        return false;
      })
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.editInfo.getUserInfo().pipe(
      map((resp) => {
        if (resp.error) {
          return true;
        }
        return false;
      }),
      tap((flag) => {
        if (!flag) {
          this.router.navigateByUrl('/home');
        }
      }),
      catchError((err) => of(true))
    );
  }
}
