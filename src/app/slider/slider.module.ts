import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [CommonModule],
})
export class SliderModule {}
