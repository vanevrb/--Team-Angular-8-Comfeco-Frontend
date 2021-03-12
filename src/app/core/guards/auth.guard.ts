import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  Router,
  CanDeactivate,
} from '@angular/router';

import { EditInfoService } from '../services/edit-info.service';
import { SaveLocalService } from '../services/save-local.service';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private editInfo: EditInfoService, private router: Router) {}

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
