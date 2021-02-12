import { Component, OnInit } from '@angular/core';
import {
  faYoutube,
  faFacebookSquare,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  youtube = faYoutube;
  facebook = faFacebookSquare;
  discord = faDiscord;
  constructor() {}

  ngOnInit(): void {}
}
