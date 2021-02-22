import { Component } from '@angular/core';

import {
  faYoutube,
  faFacebookSquare,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  youtube = faYoutube;
  facebook = faFacebookSquare;
  discord = faDiscord;
}
