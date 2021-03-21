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

  communities: any[] = [
    {
      id:1,
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
        link_share: 'https://www.comfeco.com/',
        link_info:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:'https://discord.gg/e9FEwCcZ9S'



    }, {
      id:2,
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
        link_share: 'https://www.comfeco.com/',
        link_info:'https://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:'https://discord.gg/e9FEwCcZ9S'



    }, {
      id:3,
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
        link_share: 'https://www.comfeco.com/',
        link_info:'Lohttps://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:'https://discord.gg/e9FEwCcZ9S'



    }, {
      id:4,
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
        link_share: 'https://www.comfeco.com/',
        link_info:'https://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:'https://discord.gg/e9FEwCcZ9S'



    }, {
      id:5,

      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
        link_share: 'https://www.comfeco.com/',
        link_info:'https://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:'https://discord.gg/e9FEwCcZ9S'



    }, {
      id:6,

      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
        link_share: 'https://www.comfeco.com/',
        link_info:'https://www.comfeco.com/',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:'https://discord.gg/e9FEwCcZ9S'



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
