import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { usersActions } from 'src/app/store/actions';
import { AppStateWithUsers } from '../../../store/reducers/index';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private store: Store<AppStateWithUsers>) {}

  ngOnInit(): void {
    this.store.dispatch(usersActions.loadUser());
  }
}
