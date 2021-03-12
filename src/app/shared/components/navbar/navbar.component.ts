import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UsersInfoResponse } from '../../../core/interfaces/UsersInfoResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user$: Observable<UsersInfoResponse>;
  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
  }

  ngOnInit(): void {}
}
