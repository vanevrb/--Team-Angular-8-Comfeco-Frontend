import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsersInfoResponse } from '../../../core/interfaces/UsersInfoResponse';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent implements OnInit {
  user$: Observable<Partial<UsersInfoResponse>>;

  constructor(
    private store: Store<AppStateWithUsers>,
    private router: Router
  ) {}

  ngOnInit() {
    this.user$ = this.store.select('user').pipe(map((user) => user?.user));
  }

  goEdit() {
    this.router.navigate(['profile', 'edit'], {
      skipLocationChange: true,
    });
  }
}
