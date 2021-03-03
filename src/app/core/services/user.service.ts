import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { AuthService } from './auth.service';
import { SaveLocalService } from './save-local.service';
import { UsersInfoResponse, TokenResponse } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user$: Subject<UsersInfoResponse> = new Subject();
  private _token$: Subject<string | undefined> = new Subject();

  private _currentUser: UsersInfoResponse;

  private _accessToken: string | undefined;

  get user$() {
    return this._user$.asObservable();
  }

  get accessToken(): string {
    this._token$.next(this._accessToken);
    return this._accessToken;
  }
  set accessToken(token: string) {
    this._accessToken = token;
    this._token$.next(this._accessToken);
  }

  set user(user: UsersInfoResponse) {
    this._currentUser = user;
    this._user$.next(this._currentUser);
  }

  get user() {
    this._user$.next(this._currentUser);
    return this._currentUser;
  }

  constructor(
    private saveLocal: SaveLocalService,
    private authService: AuthService
  ) {}

  async userInfo() {
    try {
      const val = (await this.saveLocal.getItem(
        environment.LOCAL_KEY_FOR_SAVE
      )) as any;
      if (!val) {
        throw new Error('No se ha iniciado sesión');
      }

      const actualDate = new Date().getTime().toString().slice(0, 10);

      if (+actualDate > val.exp) {
        throw new Error('Es necesario iniciar sesión nuevamente');
      }

      return true;
    } catch (err) {
      return false;
    }
  }
}
