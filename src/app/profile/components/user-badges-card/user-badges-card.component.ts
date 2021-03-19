import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';
import { Badges } from '../../../core/interfaces/Badges';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-badges-card',
  templateUrl: './user-badges-card.component.html',
  styleUrls: ['./user-badges-card.component.scss'],
})
export class UserBadgesCardComponent implements OnInit {
  badges$: Observable<Array<Badges>>;

  constructor(private store: Store<AppStateWithUsers>) {}

  ngOnInit(): void {
    this.badges$ = this.store
      .select('user')
      .pipe(map((user) => user?.user?.perfil.insignias));
  }
}
