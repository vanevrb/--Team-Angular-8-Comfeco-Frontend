import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning/learning.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from '../store/reducers/users.reducer';

@NgModule({
  declarations: [LearningComponent],
  imports: [
    CommonModule,
    LearningRoutingModule,
    StoreModule.forFeature('user', usersReducer),
  ],
})
export class LearningModule {}
