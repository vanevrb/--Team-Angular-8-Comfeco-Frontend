import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('frame') frame: ElementRef;
  @ViewChild('slider') slider: ElementRef;
creators: any[] = [
    {
      name: 'Anartz Mugika Ledo',
      image:
        'http://drive.google.com/uc?export=view&id=1d3P_3KOquBmH-f3Li8MYrjHLFNhLV8z2',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'angular'
    },
    {
      name: 'Bezael Perez',
      image:
        'http://drive.google.com/uc?export=view&id=1L3HT5jFpCaPSqtdq_419ZEdvIPxnqqcJ',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab java',
      team: 'angular'
    },
    {
      name: 'Diego Montoya',
      image:
        'http://drive.google.com/uc?export=view&id=1N1DO4ARkY3R_hJZLOkdm5aoe-62LzGIi',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'angular'
    },
    {
      name: 'Nicolas Molina',
      image:
        'http://drive.google.com/uc?export=view&id=125RUEMtylMdE_SlPwCa6nwZWc6pPsfUX',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'angular'
    },
    {
      name: 'Mayra Rodríguez',
      image:
        'http://drive.google.com/uc?export=view&id=1ewq-T1bbSPZC8pTtufhAVYaft-W0wX-W',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'angular'
    },
    {
      name: 'Alejandro Ñáñez Ortiz',
      image:
        'http://drive.google.com/uc?export=view&id=1P3jGjIoBVEFsw5rHKs8U3lpRUF-7tARC',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'react'
    },
    {
      name: 'Diego Plascencia',
      image:
        'http://drive.google.com/uc?export=view&id=18M2zUSZcJPkEmcKPOokpuCPjB9wQAKLl',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'react'
    },
    {
      name: 'Lara Diaz',
      image:
        'http://drive.google.com/uc?export=view&id=1KzO3y5F4PB-qAGpru7iIkP8btammjy_c',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'react'
    },
    {
      name: 'Vanessa Marely',
      image:
        'http://drive.google.com/uc?export=view&id=1XxJeoTtNt8mp-tFoQXUmhgCEHBO3lw-V',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'react'
    },
    {
      name: 'Cristopher Paniagua',
      image:
        'http://drive.google.com/uc?export=view&id=1J3SlDeIR1zpXCg33a_C4UpmsSWXXMo6S',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'vue'
    },
    {
      name: 'Fernando de la Rosa',
      image:
        'http://drive.google.com/uc?export=view&id=1LE-PCQygb7Qvk745YZlEXlZaGIyK52vj',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'vue'
    },
    {
      name: 'Ignacio Anaya',
      image:
        'http://drive.google.com/uc?export=view&id=1xe4hO7R3syYK6VJ5HtrPmoYl3bA7M-kb',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'vue'
    },
    {
      name: 'Manuel Ojeda',
      image:
        'http://drive.google.com/uc?export=view&id=1Qn7hs1MwE2pBo_nv4nUtN3-F9bL1A8EN',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'vue'
    },
    {
      name: 'Noemi Leon',
      image:
        'http://drive.google.com/uc?export=view&id=1ZRjtZ0cdS4aQnMA48f2-Mgy3c0JvBXmV',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
      team: 'vue'
    },
  ];

  constructor() {
    var i;
  }

  showevent(n) {
    alert('entre' + n);
    console.log('as');
    // sliderevents(i = n);
  }
  sliderevents(n) {
    var img = '';
    var radio = this.slider.nativeElement;

    var cant = img.length;
  }

  ngOnInit(): void {}
  @ViewChild('sliders') sliderc: ElementRef;
  cts: number = 0;
  counts: string = 0 + 'px';
  // elemento:HTMLElement
  bright(list) {
    console.log(this.sliderc.nativeElement.offsetWidth);

    if (
      this.cts + this.sliderc.nativeElement.offsetWidth <=
      list.length * 268
    ) {
      this.cts = this.cts + this.sliderc.nativeElement.offsetWidth;
    }
    this.counts = this.cts + 'px';
  }
  bleft() {
    if (this.cts > 0) {
      this.cts = this.cts - this.sliderc.nativeElement.offsetWidth;
    }
    this.counts = this.cts + 'px';
  }
  ngAfterViewInit() {
    this.frame.nativeElement.classList.add('frame');
    this.slider.nativeElement.classList.add('slider');
  }
}
