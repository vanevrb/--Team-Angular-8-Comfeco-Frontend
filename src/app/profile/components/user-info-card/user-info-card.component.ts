import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersInfoResponse } from '../../../core/interfaces/UsersInfo';
import { Observable } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent implements OnInit {
  user: UsersInfoResponse;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.user;
    console.log(this.userService.user);
  }

  ngOnInit(): void {}

  goEdit() {
    this.router.navigate(['profile', 'edit'], {
      skipLocationChange: true,
    });
  }
}
