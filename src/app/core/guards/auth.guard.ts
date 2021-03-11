import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';

import { EditInfoService } from '../services/edit-info.service';
import { SaveLocalService } from '../services/save-local.service';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private editInfo: EditInfoService,
    private saveLocal: SaveLocalService,
    private router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    return this.saveLocal
      .getItem(environment.LOCAL_KEY_FOR_SAVE)
      .then((token) => {
        if (!token) {
          throw new Error('');
        }
        return this.editInfo.getUserInfo(token).toPromise();
      })
      .then((data) => {
        if (data.error) {
          throw new Error('');
        }
        this.router.navigateByUrl('/home');
        return false;
      })
      .catch(() => {
        return true;
      });
  }
}
