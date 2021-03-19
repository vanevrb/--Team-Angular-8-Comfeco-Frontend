import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning/learning.component';


@NgModule({
  declarations: [LearningComponent],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
