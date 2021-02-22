import { Component, OnInit, ViewChild ,AfterViewInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit,AfterViewInit {
@ViewChild('mi') myDiv:ElementRef;


  constructor() { }
  ngAfterViewInit() {
    // this.myDiv.nativeElement.value ="sa";
   console.log(this.myDiv.nativeElement) ;
  }
  ngOnInit(): void {
    
  }

}
