import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-navigation',
  templateUrl: './form-navigation.component.html',
  styleUrls: ['./form-navigation.component.scss'],
})
export class FormNavigationComponent {
  get route() {
    const route = this.activatedRoute.snapshot.url[0].path;

    return route !== 'forgot';
  }

  constructor(private activatedRoute: ActivatedRoute) {}
}
