import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  communities: any[] = [
    {
      name: 'Comunidad de Programadores',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'https://discord.gg/YEGwbjMf',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'El lenguaje de los programadores',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'link',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Latam Dev',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'link',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Comunidad de Programadores',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'link',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Comunidad de Programadores',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'link',
      lenguage_icon: 'fab javascript',
    },
    // ,
    // {
    //   "name": "Comunidad de Programadores",
    //   "image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
    //   "link": "link",
    //   "lenguage_icon": "fab javascript"
    // },
    // {
    //   "name": "Comunidad de Programadores",
    //   "image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
    //   "link": "link",
    //   "lenguage_icon": "fab javascript"
    // },
    // {
    //   "name": "Comunidad de Programadores",
    //   "image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
    //   "link": "link",
    //   "lenguage_icon": "fab javascript"
    // }
  ];

  constructor() {}

  ngOnInit(): void {}
}
