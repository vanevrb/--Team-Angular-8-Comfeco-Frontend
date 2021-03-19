import { Component, OnInit } from '@angular/core';
import { EditInfoService } from '../../../core/services/edit-info.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  searchgroup: string="";
  groups: any[] = [
    {
      id:1,
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'ii',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:2,
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Vamos',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:3,
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:4,
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:5,

      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:6,

      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    },
    {
      id:7,
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'ii',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:8,
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Vamos',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:9,
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:10,
      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:11,

      image:
        'https://cronicaglobal.elespanol.com/uploads/s1/99/84/55/5/escuela-informaticos.jpeg',
        link_share: 'https://www.comfeco.com/',
        lenguage:'Typescript',
        title:'Los crypto',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link_unirse:''



    }, {
      id:12,

      image:
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
    }
    
  ];
  constructor(private editInfo: EditInfoService) { 
    

  }

  ngOnInit(): void {
    this.editInfo.getGrupo().subscribe((data) => {
      console.log(data);
    });
  }
}
