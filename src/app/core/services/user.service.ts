import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SaveLocalService } from './save-local.service';
import { environment } from '../../../environments/environment';
import { DecodeService } from './decode.service';

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
    private saveLocal: SaveLocalService,
    private decodeService: DecodeService
  ) {}

  async userInfo() {
    try {
      const val = (await this.saveLocal.getItem(
        environment.LOCAL_KEY_FOR_SAVE
      )) as any;
      if (!val) {
        throw new Error('No se ha iniciado sesión');
      }

      const tokenInfo = this.decodeService.decode(val.access_token);
      const actualDate = new Date().getTime().toString().slice(0, 10);

      if (+actualDate > val.exp) {
        throw new Error('Es necesario iniciar sesión nuevamente');
      }

      this.username = tokenInfo.user_name;
      return true;
    } catch (err) {
      this.username = undefined;
      return false;
    }
  }
}
