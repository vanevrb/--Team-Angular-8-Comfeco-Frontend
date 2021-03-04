import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SaveLocalService } from '../services/save-local.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';
import { Response } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserInfoResolver implements Resolve<boolean> {
  constructor(
    private saveLocal: SaveLocalService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.saveLocal
      .getItem(environment.LOCAL_KEY_FOR_SAVE)
      .then((val: string) => {
        if (!val) {
          throw new Error('Invalid Token');
        }
        this.userService.accessToken = val;
        return this.authService.getUserInfo(val).toPromise();
      })
      .then((data: Response) => {
        if (data.error) {
          throw new Error('Invalid User');
        }
        this.userService.user = data.message;
        return true;
      })
      .catch((err) => {
        return false;
      });
  }
}
