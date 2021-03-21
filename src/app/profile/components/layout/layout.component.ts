import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';
import { usersActions } from 'src/app/store/actions';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
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
