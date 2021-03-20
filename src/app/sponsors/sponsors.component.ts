import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';



@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent implements OnInit {
  sponsors: any[] = [{
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1_caet-rYU0ZpNPrN5oz4UeDGRw89xyyL',
      link: 'https://www.comfeco.com/',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1NYl1KkzGwxoxnIUuT4Wpv5auNfllAyJq',
      link: 'https://www.comfeco.com/',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1ua0cKUuiJLuICjBMaTsNhSSZBGztatbj',
      link: 'https://www.comfeco.com/',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=10ygX-rMCUnMqYL8skt_CVoZhSElTxti3',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1b-dezb5Rbcc1iU5e0YHxiz7vJXPUhFSF',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1b-dezb5Rbcc1iU5e0YHxiz7vJXPUhFSF',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1b-dezb5Rbcc1iU5e0YHxiz7vJXPUhFSF',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1b-dezb5Rbcc1iU5e0YHxiz7vJXPUhFSF',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1b-dezb5Rbcc1iU5e0YHxiz7vJXPUhFSF',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1b-dezb5Rbcc1iU5e0YHxiz7vJXPUhFSF',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    },
    {
      name: 'Bezael Perez',
      image: 'http://drive.google.com/uc?export=view&id=1b-dezb5Rbcc1iU5e0YHxiz7vJXPUhFSF',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    }
  ];
  constructor() {}
  @ViewChild('sliderc') sliderc: ElementRef;

  ct: number = 0;
  count: string = 0 + "px";
  // elemento:HTMLElement
  bright(sponsors) {

    console.log(this.sliderc.nativeElement.offsetWidth);

    if ((this.ct + this.sliderc.nativeElement.offsetWidth) <= sponsors.length * 93) {
      this.ct = this.ct + this.sliderc.nativeElement.offsetWidth;
    }
    this.count = this.ct + "px";

  }
  bleft() {
    if (this.ct > 0) {

      this.ct = this.ct - this.sliderc.nativeElement.offsetWidth;
    }
    this.count = this.ct + "px";

  }
 
  ngOnInit(): void {}
}
