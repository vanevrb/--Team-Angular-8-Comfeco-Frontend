import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { usersReducer } from '../store/reducers';

import { CommunitiesRoutingModule } from './communities-routing.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    CommunitiesRoutingModule,
    StoreModule.forFeature('user', usersReducer),
  ],
})
export class CommunitiesModule {}
