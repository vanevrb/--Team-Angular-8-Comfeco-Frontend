import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginActions, usersActions } from '../actions';

import { Observable, of, from } from 'rxjs';
import { map, catchError, switchMap, tap, finalize } from 'rxjs/operators';

import { AuthService } from '../../core/services/auth.service';
import { SaveLocalService } from '../../core/services/save-local.service';

import { environment } from '../../../environments/environment';
import { AlertService } from '../../core/services/alert.service';

@Injectable()
export class LoginEffects {
  initLogin$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.initLogin),
      switchMap(({ loginData }) => {
        return this.authService.login(loginData).pipe(
          map((resp) => {
            if (resp.error) {
              this.swal.failSwal(
                'Por favor intenta más tarde',
                'Ups, algo salio mal'
              );
              return loginActions.errorLogin();
            }
            return loginActions.successLogin({
              token: resp.message.access_token,
            });
          }),
          catchError(() => {
            this.swal.failSwal(
              'Intenta nuevamente',
              'Verifica Email/Contraseña'
            );
            return of(loginActions.errorLogin());
          })
        );
      })
    )
  );

  successLogin$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.successLogin),
      switchMap(({ token }) => {
        return from(
          this.saveLocal.setItem(environment.LOCAL_KEY_FOR_SAVE, token)
        ).pipe(
          map(() => {
            this.router.navigateByUrl('/home');
            return loginActions.completeLogin();
          }),
          catchError(() => {
            this.swal.failSwal(
              'Por favor intenta más tarde',
              'Ups, algo salio mal'
            );
            return of(loginActions.errorLogin());
          })
        );
      })
    )
  );

  logoutLogin$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.logout),
      switchMap(() => {
        return from(
          this.saveLocal.removeItem(environment.LOCAL_KEY_FOR_SAVE)
        ).pipe(
          map(() => {
            return usersActions.unloadUser();
          }),
          catchError(() => {
            return of(usersActions.unloadUser());
          }),
          finalize(() => this.router.navigateByUrl('/'))
        );
      })
    )
  );
  forgotPassword$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.forgotPassword),
      switchMap(({ email }) => {
        return this.authService.forgotPassword(email).pipe(
          map((data) => {
            if (data.error) {
              this.swal.failSwal(data.message, 'Ups, algo salío mal');
            }

            return usersActions.unloadUser();
          }),
          catchError(() => {
            this.swal.failSwal('Intente más tarde', 'Ups, algo salío mal');

            return of(usersActions.unloadUser());
          }),
          finalize(() => this.router.navigateByUrl('/auth/login'))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private saveLocal: SaveLocalService,
    private swal: AlertService
  ) {}
}
