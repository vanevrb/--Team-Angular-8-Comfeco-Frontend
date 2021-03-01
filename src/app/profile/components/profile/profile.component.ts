import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';
import { UserService } from '../../../core/services/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username$: Observable<string>;

  user$: Observable<any>;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.username$ = this.userService.user$;
  }

  ngOnInit(): void {}

  getUserInfo() {
    return this.authService.getUserInfo(this.userService.username);
  }
}
