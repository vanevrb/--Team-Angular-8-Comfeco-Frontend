import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { UsersInfoResponse } from '../../../core/interfaces/UsersInfo';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent {
  user: UsersInfoResponse;

  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.user;
    console.log('user', this.user);
  }

  goEdit() {
    this.router.navigate(['profile', 'edit'], {
      skipLocationChange: true,
    });
  }
}
