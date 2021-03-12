import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Response } from '../interfaces';
import { SaveLocalService } from '../services/save-local.service';
import { UserService } from '../services/user.service';
import { EditInfoService } from '../services/edit-info.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserInfoResolver implements Resolve<boolean> {
  constructor(
    private saveLocal: SaveLocalService,
    private userService: UserService,
    private editInfoService: EditInfoService,
    private router: Router
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
        return this.editInfoService.getUserInfo().toPromise();
      })
      .then((data: Response) => {
        if (data.error) {
          throw new Error('Invalid User');
        }

        this.userService.user = data.message;
        return true;
      })
      .catch((err) => {
        this.router.navigateByUrl('/');
        return false;
      });
  }
}
