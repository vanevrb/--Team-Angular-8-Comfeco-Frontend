import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CounterModule } from '../counter/counter.module';
import { UserService } from '../core/services/user.service';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HomeRoutingModule, CounterModule],
})
export class HomeModule {
  // constructor(private userService: UserService) {
  //   console.log(this.userService.accessToken);
  // }
}
