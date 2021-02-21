import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DecodeService } from './decode.service';
import { SaveLocalService } from './save-local.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user$: Subject<string | undefined> = new Subject();

  get user$() {
    return this._user$.asObservable();
  }

  private _username: string | undefined;

  set username(username: string) {
    this._username = username;
    this._user$.next(this._username);
  }

  get username() {
    this._user$.next(this._username);
    return this._username;
  }

  constructor(
    private decodeService: DecodeService,
    private saveLocal: SaveLocalService
  ) {
    this.userInfo()
      .then()
      .catch((err) => console.error(err));
  }

  userInfo() {
    return this.saveLocal
      .getItem(environment.LOCAL_KEY_FOR_SAVE)
      .then((val: any) => {
        const tokenInfo = this.decodeService.decode(val.access_token);
        const actualDate = new Date().getTime().toString().slice(0, 10);

        if (+actualDate > val.exp) {
          throw new Error('Es necesario iniciar sesión nuevamente');
        }
        this._username = tokenInfo.user_name;
        this._user$.next(this._username);
      })
      .catch((err) => this._user$.next(this._username));
  }

  logout() {
    this.saveLocal
      .removeItem(environment.LOCAL_KEY_FOR_SAVE)
      .then(() => {
        this._username = undefined;
        this._user$.next(this._username);
        return true;
      })
      .catch((err) => {
        console.error(err);
        this._username = undefined;
        this._user$.next(this._username);
        return false;
      });
  }
}
