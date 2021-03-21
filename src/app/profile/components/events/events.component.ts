import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: any[] = [
    {
      id: 1,
      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'Los crypto',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 2,
      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 3,
      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'Lohttps://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 4,
      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 5,

      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 6,

      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 7,
      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 8,
      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 9,
      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 10,
      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 11,

      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
    {
      id: 12,

      image: 'http://localhost:4200/assets/images/event.svg',
      link_share: 'https://www.comfeco.com/',
      link_info: 'https://www.comfeco.com/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      link_unirse: '',
    },
  ];
  constructor(private swal: AlertService) {}

  ngOnInit(): void {}

  join() {
    this.swal.joinEvent();
  }
}
