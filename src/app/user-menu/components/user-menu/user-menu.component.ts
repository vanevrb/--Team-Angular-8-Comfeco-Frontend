import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from '../../../core/services/user.service';
import { DecodeService } from '../../../core/services/decode.service';
import { SaveLocalService } from '../../../core/services/save-local.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  username$: Observable<string>;

  constructor(
    private userService: UserService,
    private saveLocal: SaveLocalService,
    private router: Router
  ) {
    this.username$ = this.userService.user$;
  }
  ngOnInit() {}

  logout() {
    this.saveLocal
      .removeItem(environment.LOCAL_KEY_FOR_SAVE)
      .then(() => true)
      .catch(() => false)
      .finally(() => {
        this.userService.username = undefined;
        this.router.navigateByUrl('/');
      });
  }
}