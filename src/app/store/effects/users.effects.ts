import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { usersActions } from '../actions';

import { Action, Store } from '@ngrx/store';

import { Observable, of, from } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { EditInfoService } from '../../core/services/edit-info.service';
import { SaveLocalService } from '../../core/services/save-local.service';

import { environment } from '../../../environments/environment';
import { loginActions } from 'src/app/store/actions';

@Injectable()
export class UsersEffects {
  loadUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUser),
      switchMap(() =>
        this.editInfo.getUserInfo().pipe(
          map((resp) => {
            if (resp.error) {
              return usersActions.loadErrorUser({ payload: resp.error.error });
            }
            this.store.dispatch(loginActions.completeLogin());
            return usersActions.setUser({ user: resp.message });
          }),
          catchError(() => of(usersActions.loadErrorUser({ payload: 'error' })))
        )
      )
    )
  );

  unloadUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.unloadUser),
      switchMap(() =>
        from(this.saveLocal.removeItem(environment.LOCAL_KEY_FOR_SAVE)).pipe(
          map(() => usersActions.deleteUser()),
          catchError(() => of(usersActions.loadErrorUser)),
          tap(() => {
            this.router.navigateByUrl('/');
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private editInfo: EditInfoService,
    private saveLocal: SaveLocalService,
    private router: Router,
    private store: Store
  ) {}
}
