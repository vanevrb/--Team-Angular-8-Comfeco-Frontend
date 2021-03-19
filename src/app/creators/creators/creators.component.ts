import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { usersActions } from 'src/app/store/actions';
import { AppStateWithUsers } from '../../store/reducers';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
})
export class CreatorsComponent implements OnInit, OnDestroy {
  userStoreSub$: Subscription;

  constructor(private store: Store<AppStateWithUsers>) {}

  ngOnInit(): void {
    this.userStoreSub$ = this.store
      .select('user')
      .pipe(take(1))
      .subscribe((user) => {
        if (user.loaded) {
          return;
        }

        this.store.dispatch(usersActions.loadUser());
      });
  }

  ngOnDestroy() {
    this.userStoreSub$.unsubscribe();
  }
}
