import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  searchgroup: string="";
  groups: any[] = [
    {
      id:1,
      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'ii',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:2,
      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Vamos',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:3,
      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:4,
      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:5,

      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:6,

      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    },
    {
      id:7,
      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'ii',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:8,
      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Vamos',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:9,
      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:10,
      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:11,

      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:12,

      know:'Novato',rol:'Integrante',image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }
  ];

  mygroup_persons: any[] = [
    {
      name: 'JuanSecu',
      know:'Novato',
      rol:'Integrante',image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'https://discord.gg/YEGwbjMf',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Juanjo',
      know:'Medio',
      rol:'Integrante',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'link',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'LuisLirac',
      know:'Avanzado',
      rol:'Lider',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'link',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'JCruz',
      know:'Novato',
      rol:'Integrante',
      image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'link',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Fede',
      know:'Apenas aprendiendo',
      rol:'Integrante',image:
        'https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png',
      link: 'link',
      lenguage_icon: 'fab javascript',
    },
    // ,
    // {
    //   "name": "Comunidad de Programadores",
    //   "know:'Novato',rol:'Integrante',image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
    //   "link": "link",
    //   "lenguage_icon": "fab javascript"
    // },
    // {
    //   "name": "Comunidad de Programadores",
    //   "know:'Novato',rol:'Integrante',image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
    //   "link": "link",
    //   "lenguage_icon": "fab javascript"
    // },
    // {
    //   "name": "Comunidad de Programadores",
    //   "know:'Novato',rol:'Integrante',image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
    //   "link": "link",
    //   "lenguage_icon": "fab javascript"
    // }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
