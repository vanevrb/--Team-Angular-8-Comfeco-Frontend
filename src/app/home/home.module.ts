import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CounterModule } from '../counter/counter.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HomeRoutingModule, CounterModule],
})
export class HomeModule {}
