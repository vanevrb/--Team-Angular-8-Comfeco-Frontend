import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
})
export class SubmenuComponent implements OnInit, OnDestroy {
  private endpoint$: Subscription;
  actualPath: string;

  constructor(private router: Router) {
    this.endpoint$ = this.router.events
      .pipe(
        map((data) => {
          if (data instanceof NavigationEnd) {
            const arr = data.urlAfterRedirects.split('/');
            return arr[arr.length - 1];
          }
        })
      )
      .subscribe((data) => {
        if (data) {
          console.log(data);
          this.actualPath = data;
        }
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.endpoint$.unsubscribe();
  }

  navTo(endpoint: string) {
    this.router.navigate(['profile', endpoint], {
      skipLocationChange: true,
    });
  }
}
