import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './creators/creators.component';


@NgModule({
  declarations: [CreatorsComponent],
  imports: [
    CommonModule,
    CreatorsRoutingModule
  ]
})
export class CreatorsModule { }
