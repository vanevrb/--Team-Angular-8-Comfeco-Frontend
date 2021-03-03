import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { SaveLocalService } from '../../core/services/save-local.service';
import {
  UsersInfoResponse,
  TokenResponse,
  Response,
} from '../../core/interfaces';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  user$: Observable<UsersInfoResponse>;
  isShowSubmenu = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private saveLocal: SaveLocalService
  ) {
    this.user$ = this.userService.user$;
  }
  ngOnInit() {}

  getCurrUser() {
    return this.saveLocal
      .getItem(environment.LOCAL_KEY_FOR_SAVE)
      .then((val: TokenResponse) => {
        if (!val.access_token) {
          throw new Error('Invalid Token');
        }
        console.log(val);
        return this.authService.getUserInfo(val.access_token).toPromise();
      })
      .then((data: Response) => {
        if (data.error) {
          throw new Error('Invalid User');
        }
        this.userService.user = data.message;
        console.log(data);
        return true;
      })
      .catch((err) => {
        return false;
      });
  }

  showSubmenu() {
    this.isShowSubmenu = !this.isShowSubmenu;
  }

  goMyProfile() {
    this.isShowSubmenu = false;

    this.router.navigateByUrl('/profile');
  }
  logout() {
    this.saveLocal.removeItem(environment.LOCAL_KEY_FOR_SAVE).then(() => {
      this.isShowSubmenu = false;
      this.userService.user = undefined;
      this.router.navigateByUrl('/');
    });
  }
}
