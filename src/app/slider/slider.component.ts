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
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/662-3-un-bebe-dormido-o-muy-atento.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/661-3-bebe-con-gorrito-de-flor-durmiendo.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab java',
    },
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/660-3-bebe-dormido-en-un-frutero.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/662-3-un-bebe-dormido-o-muy-atento.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'fab javascript',
    },
    {
      name: 'Bezael Perez',
      image:
        'https://static.guiainfantil.com/pictures/663-3-dos-gemelas-duermen-a-juego.jpg',
      link: 'https://www.comfeco.com/',
      lenguage_icon: 'js',
    },
  ];

  constructor() { var i;}
  
  showevent(n) {
    alert("entre"+n);
    console.log('as');
    // sliderevents(i = n);
  } 
  sliderevents(n) {
    var img = "";
      var radio =  this.slider.nativeElement;
    

      
     var cant = img.length;

   }
 

  ngOnInit(): void {}
  @ViewChild('sliders') sliderc: ElementRef;
  cts: number = 0;
  counts: string = 0 + "px";
  // elemento:HTMLElement
  bright(list) {

    console.log(this.sliderc.nativeElement.offsetWidth);

    if ((this.cts + this.sliderc.nativeElement.offsetWidth) <= list.length * 268) {
      this.cts = this.cts + this.sliderc.nativeElement.offsetWidth;
    }
    this.counts = this.cts + "px";

  }
  bleft() {
    if (this.cts > 0) {

      this.cts = this.cts - this.sliderc.nativeElement.offsetWidth;
    }
    this.counts = this.cts + "px";

  }
  ngAfterViewInit() {
    this.frame.nativeElement.classList.add('frame');
    this.slider.nativeElement.classList.add('slider');
  }
}
