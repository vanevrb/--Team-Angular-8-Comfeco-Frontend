import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './creators/creators.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from '../store/reducers/users.reducer';

@NgModule({
  declarations: [CreatorsComponent],
  imports: [
    CommonModule,
    CreatorsRoutingModule,
    StoreModule.forFeature('user', usersReducer),
  ],
})
export class CreatorsModule {}
