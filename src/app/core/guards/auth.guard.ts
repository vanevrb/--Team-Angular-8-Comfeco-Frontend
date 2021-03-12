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

import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../store/reducers/index';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private editInfo: EditInfoService,
    private saveLocal: SaveLocalService,
    private router: Router,
    private store: Store<AppStateWithUsers>
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.editInfo.getUserInfo().pipe(
      map((resp) => {
        if (resp.error) {
          return true;
        }
        this.router.navigateByUrl('/home');
        return false;
      }),
      catchError((err) => of(true))
    );
  }
}
