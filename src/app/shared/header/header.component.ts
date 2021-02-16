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
  LogoUrl = 'https://spaceplace.nasa.gov/review/sunburn/sunburn1.sp.png';
  constructor() {}

  ngOnInit(): void {}
}
