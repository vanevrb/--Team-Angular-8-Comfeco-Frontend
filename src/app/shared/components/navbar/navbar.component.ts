import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UsersInfoResponse } from '../../../core/interfaces/UsersInfoResponse';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';
import { map } from 'rxjs/operators';

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
