import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorsComponent } from './sponsors.component';

@NgModule({
  declarations: [SponsorsComponent],
  exports: [SponsorsComponent],
  imports: [CommonModule],
})
export class SponsorsModule {}
