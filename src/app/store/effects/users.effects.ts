import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { usersActions } from '../actions';
import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { EditInfoService } from '../../core/services/edit-info.service';
import { Observable, of, from } from 'rxjs';
import { Action } from '@ngrx/store';
import { SaveLocalService } from '../../core/services/save-local.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UsersEffects {
  loadUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUser),
      switchMap(() =>
        this.editInfo.getUserInfo().pipe(
          map(({ message }) => usersActions.setUser({ user: message })),
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
    private router: Router
  ) {}
}
