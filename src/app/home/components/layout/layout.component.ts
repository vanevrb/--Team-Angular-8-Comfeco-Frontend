import { Component, OnInit, ViewChild ,AfterViewInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit,AfterViewInit {
  
  @ViewChild('frame') frame:ElementRef;
  @ViewChild('slider') slider:ElementRef;
  communities: any[] = [
    {
      "name": "Comunidad de Programadores",
      "image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
      "link": "https://discord.gg/YEGwbjMf",
      "lenguage_icon": "fab javascript"
    },
    {
      "name": "El lenguaje de los programadores",
      "image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
      "link": "link",
      "lenguage_icon": "fab javascript"
    },
    {
      "name": "Latam Dev",
      "image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
      "link": "link",
      "lenguage_icon": "fab javascript"
    },
    {
      "name": "Comunidad de Programadores",
      "image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
      "link": "link",
      "lenguage_icon": "fab javascript"
    },
    {
      "name": "Comunidad de Programadores",
      "image": "https://cdn.discordapp.com/avatars/785683857487036467/bc9ee60333180bee3e04afd2ed50bdac.png",
      "link": "link",
      "lenguage_icon": "fab javascript"
    }
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
  creators: any[] = [
    {
      "name": "Bezael Perez",
      "image": "https://static.guiainfantil.com/pictures/662-3-un-bebe-dormido-o-muy-atento.jpg",
      "link": "https://www.comfeco.com/",
      "lenguage_icon": "fab javascript"
    },
    {
      "name": "Bezael Perez",
      "image": "https://static.guiainfantil.com/pictures/661-3-bebe-con-gorrito-de-flor-durmiendo.jpg",
      "link": "https://www.comfeco.com/",
      "lenguage_icon": "fab java"
    },
    {
      "name": "Bezael Perez",
      "image": "https://static.guiainfantil.com/pictures/660-3-bebe-dormido-en-un-frutero.jpg",
      "link": "https://www.comfeco.com/",
      "lenguage_icon": "fab javascript"

    },
    {
      "name": "Bezael Perez",
      "image": "https://static.guiainfantil.com/pictures/662-3-un-bebe-dormido-o-muy-atento.jpg",
      "link": "https://www.comfeco.com/",
      "lenguage_icon": "fab javascript"

    },
    {
      "name": "Bezael Perez",
      "image": "https://static.guiainfantil.com/pictures/663-3-dos-gemelas-duermen-a-juego.jpg",
      "link": "https://www.comfeco.com/",
      "lenguage_icon": "js"

    }
  ];
  
  sponsors: any[] = [
    {
      "name": "Bezael Perez",
      "image": "http://drive.google.com/uc?export=view&id=1_caet-rYU0ZpNPrN5oz4UeDGRw89xyyL",
      "link": "https://www.comfeco.com/"
    },
    {
      "name": "Bezael Perez",
      "image": "http://drive.google.com/uc?export=view&id=1NYl1KkzGwxoxnIUuT4Wpv5auNfllAyJq",
      "link": "https://www.comfeco.com/"
    },
    {
      "name": "Bezael Perez",
      "image": "http://drive.google.com/uc?export=view&id=1ua0cKUuiJLuICjBMaTsNhSSZBGztatbj",
      "link": "https://www.comfeco.com/"

    },
    {
      "name": "Bezael Perez",
      "image": "http://drive.google.com/uc?export=view&id=10ygX-rMCUnMqYL8skt_CVoZhSElTxti3",
      "link": "https://www.comfeco.com/",
      "lenguage_icon": "fab javascript"

    },
    {
      "name": "Bezael Perez",
      "image": "http://drive.google.com/uc?export=view&id=1b-dezb5Rbcc1iU5e0YHxiz7vJXPUhFSF",
      "link": "https://www.comfeco.com/",
      "lenguage_icon": "js"

    }
  ];
     // constructor() { }
  constructor(private elementRef: ElementRef) {
    
  }

  ngAfterViewInit() {

 this.frame.nativeElement.classList.add('frame');
 this.slider.nativeElement.classList.add('slider');
  }

  ngOnInit(): void {
  }

}
