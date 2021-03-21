import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';
import { Badges } from '../../../core/interfaces/Badges';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BadgesIds } from '../../../core/enums/BadgesIds';
import { myBadges } from '../../mockup/myBadges';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-badges-card',
  templateUrl: './user-badges-card.component.html',
  styleUrls: ['./user-badges-card.component.scss'],
})
export class UserBadgesCardComponent implements OnInit {
  badge$: Observable<any>;

  constructor(
    private store: Store<AppStateWithUsers>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.badge$ = this.store
      .select('user')
      .pipe(
        map((user) =>
          myBadges.find(
            (item) => item.idInsignia === user?.user?.perfil.puntaje
          )
        )
      );
  }

  getInsigniaNombre(id: number) {
    return BadgesIds[id];
  }
  goThere() {
    this.router.navigate(['profile', 'edit'], {
      skipLocationChange: true,
    });
  }
}
