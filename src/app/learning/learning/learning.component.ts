import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { usersActions } from 'src/app/store/actions';
import { AppStateWithUsers } from '../../store/reducers/index';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit, OnDestroy {
  userStoreSub$: Subscription;

  workshops: any[] = [
    {
      id:1,
      image:
        'http://localhost:4200/assets/images/event.svg',
        link_share: 'https://www.comfeco.com/',
        link_info:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:2,
      image:
        'http://localhost:4200/assets/images/event.svg',
        link_share: 'https://www.comfeco.com/',
        link_info:'https://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:3,
      image:
        'http://localhost:4200/assets/images/event.svg',
        link_share: 'https://www.comfeco.com/',
        link_info:'Lohttps://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:4,
      image:
        'http://localhost:4200/assets/images/event.svg',
        link_share: 'https://www.comfeco.com/',
        link_info:'https://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:5,

      image:
        'http://localhost:4200/assets/images/event.svg',
        link_share: 'https://www.comfeco.com/',
        link_info:'https://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:6,

      image:
        'http://localhost:4200/assets/images/event.svg',
        link_share: 'https://www.comfeco.com/',
        link_info:'https://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }
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
