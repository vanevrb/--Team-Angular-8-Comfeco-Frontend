import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
})
export class SubmenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navTo(endpoint: string) {
    this.router.navigate(['profile', endpoint], {
      skipLocationChange: true,
    });
  }
}
