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

import { SaveLocalService } from '../services/save-local.service';
import { environment } from '../../../environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../store/reducers/index';

@Injectable({
  providedIn: 'root',
})
export class ProtectRoutesGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private store: Store<AppStateWithUsers>,
    private saveLocal: SaveLocalService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // return this.store.select('user').pipe(
    //   map((user) => {
    //     console.log(user);
    //     if (!user.error && user.user != null) {
    //       return true;
    //     }
    //     return false;
    //   })
    // );
    return of(true);
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
