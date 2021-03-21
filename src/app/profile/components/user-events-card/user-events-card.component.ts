import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-events-card',
  templateUrl: './user-events-card.component.html',
  styleUrls: ['./user-events-card.component.scss'],
})
export class UserEventsCardComponent implements OnInit {
  events: any[] = [
    {
      name: 'Evento 1',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Evento 2',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Evento 3',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Evento 4',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navTo() {
    this.router.navigate(['profile', 'events'], {
      skipLocationChange: true,
    });
  }
}
