import { Component, OnInit } from '@angular/core';
import { UsersInfoResponse } from '../../../core/interfaces/UsersInfoResponse';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: Partial<UsersInfoResponse>;

  constructor(private store: Store<AppStateWithUsers>) {}

  ngOnInit(): void {
    this.store.select('user').subscribe((user) => {
      this.user = user?.user;
    });
  }
}
