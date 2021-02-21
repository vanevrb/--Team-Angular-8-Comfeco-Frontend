import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  username$: Observable<string>;

  constructor(private userService: UserService, private router: Router) {
    this.username$ = this.userService.user$;
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }
}
