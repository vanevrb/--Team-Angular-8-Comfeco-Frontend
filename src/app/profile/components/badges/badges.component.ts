import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
})
export class BadgesComponent implements OnInit {
  badges: any[] = [
    {
      image:
        'https://i.picsum.photos/id/409/200/200.jpg?hmac=AY8BYOBixnRqVEMdEhYmw49e-6qu3M3zf_xXjkAuHHc',
      title: 'Sociable',
      category: 'Aventura',
      description:
        'Insignia otorgada a alguien sociable que se tiene mas de 10 amigos.',
      description_win:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
    {
      image:
        'https://i.picsum.photos/id/839/200/200.jpg?hmac=IKyeqXa3iOwFkcM24B_X_Qjf9643wuDTCsTiM3T6AZg',
      title: 'Amistoso',
      category: 'Compartir',
      description: 'Insignia otorgada a alguien que comparte',
      description_win:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
    {
      image:
        'https://i.picsum.photos/id/473/200/200.jpg?hmac=lXsJQxtsh73ygSCMmcWA-YqIpQ4FjdxUYkkuLTAPBfM',
        title:'Generoso',
        category:'Donador',
        description:'Insignia otorgada a patrocinador del evento',
        description_win:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    }, {
      image:
        'https://i.picsum.photos/id/473/200/200.jpg?hmac=lXsJQxtsh73ygSCMmcWA-YqIpQ4FjdxUYkkuLTAPBfM',
        title:'Generoso',
        category:'Donador',
        description:'Insignia otorgada a patrocinador del evento',
        description_win:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
