import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Action, Store } from '@ngrx/store';

import { Observable, of, from, throwError } from 'rxjs';
import { map, catchError, switchMap, tap, take } from 'rxjs/operators';

import { EditInfoService } from '../../core/services/edit-info.service';
import { SaveLocalService } from '../../core/services/save-local.service';

import { environment } from '../../../environments/environment';
import { imageActions, usersActions } from 'src/app/store/actions';
import { AppStateWithUsers } from '../reducers/index';

@Injectable()
export class ImageEffects {
  successLoadImage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(imageActions.successLoadImg),
      switchMap((data) => {
        return this.editInfo.setAvatar(data.url).pipe(
          switchMap((resp: any) => {
            if (resp.error) {
              return throwError(resp.error);
            }
            return this.editInfo.getUserInfo().pipe(
              map((resp) => {
                if (resp.error) {
                  return imageActions.errorLoadImg();
                }
                this.store.dispatch(
                  usersActions.setUser({ user: resp.message })
                );
                return imageActions.updatedImg();
              })
            );
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private editInfo: EditInfoService,
    private saveLocal: SaveLocalService,
    private router: Router,
    private store: Store<AppStateWithUsers>
  ) {}
}
