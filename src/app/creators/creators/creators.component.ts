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
  creators: any[] = [
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/662-3-un-bebe-dormido-o-muy-atento.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/661-3-bebe-con-gorrito-de-flor-durmiendo.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab java',
    },
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/660-3-bebe-dormido-en-un-frutero.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/662-3-un-bebe-dormido-o-muy-atento.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/663-3-dos-gemelas-duermen-a-juego.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    },
  ];

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
