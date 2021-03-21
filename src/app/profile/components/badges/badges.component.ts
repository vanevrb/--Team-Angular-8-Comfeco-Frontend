import { Component, OnInit } from '@angular/core';
import { BadgesIds } from '../../../core/enums/BadgesIds';
import { myBadges } from '../../mockup/myBadges';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
})
export class BadgesComponent implements OnInit {
  badges = myBadges;

  constructor() {}

  getInsigniaNombre(id: number) {
    return BadgesIds[id];
  }

  ngOnInit(): void {}
}
