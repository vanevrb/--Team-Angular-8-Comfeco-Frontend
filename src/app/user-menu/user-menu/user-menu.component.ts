import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../store/reducers/index';
import { usersActions, loginActions } from 'src/app/store/actions';

import { UsersInfoResponse } from '../../core/interfaces';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  user: Partial<UsersInfoResponse>;
  isShowSubmenu = false;

  constructor(private store: Store<AppStateWithUsers>) {}

  ngOnInit() {
    this.store.select('user').subscribe((user) => {
      this.user = user?.user;
    });
  }

  showSubmenu() {
    this.isShowSubmenu = !this.isShowSubmenu;
  }

  logout() {
    this.isShowSubmenu = false;
    this.store.dispatch(loginActions.logout());
  }
}
