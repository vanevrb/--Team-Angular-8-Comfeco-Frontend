import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: any[] = [
    {
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link_unirse:''



    }, {
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link_unirse:''



    }, {
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link_unirse:''



    }, {
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link_unirse:''



    }, {
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link_unirse:''



    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
