import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CounterModule } from '../counter/counter.module';
import { SponsorsModule } from '../sponsors/sponsors.module';
import { SliderModule } from '../slider/slider.module';

import { LayoutComponent } from './components/layout/layout.component';
import { CommunitiesComponent } from './components/communities/communities.component';

@NgModule({
  declarations: [LayoutComponent, CommunitiesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CounterModule,
    SponsorsModule,
    SliderModule,
  ],
})
export class HomeModule {}
