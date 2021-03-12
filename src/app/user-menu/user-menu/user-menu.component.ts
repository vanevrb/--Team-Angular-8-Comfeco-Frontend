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
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../store/reducers/index';
import { UsersState } from '../../store/reducers/users.reducer';
import { map, tap, filter } from 'rxjs/operators';
import { usersActions } from 'src/app/store/actions';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  user: Partial<UsersInfoResponse>;
  isShowSubmenu = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private saveLocal: SaveLocalService,
    private store: Store<AppStateWithUsers>
  ) {}

  ngOnInit() {
    this.store.select('user').subscribe((user) => {
      this.user = user?.user;
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
    this.isShowSubmenu = false;
    this.store.dispatch(usersActions.unloadUser());
  }
}
