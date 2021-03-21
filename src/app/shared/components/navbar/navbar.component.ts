import { Component, OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
 } from '@angular/core';
import { UsersInfoResponse } from '../../../core/interfaces/UsersInfoResponse';
import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: Partial<UsersInfoResponse>;
  @ViewChild('navbarl') navbarl: ElementRef;

  constructor(private store: Store<AppStateWithUsers>) {}
showmenu(){
  // alert("hola");
  // document.getElementById('navbar__links').style.display = "block";
  // this.navbarl.nativeElement.classList.add('navbarl');

  this.navbarl.nativeElement.classList.toggle('navbarl');

}
  ngOnInit(): void {
    this.store.select('user').subscribe((user) => {
      this.user = user?.user;
    });
  }
}
