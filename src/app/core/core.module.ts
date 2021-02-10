import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, ReactiveFormsModule],
  exports: [HttpClientModule, ReactiveFormsModule],
})
export class CoreModule {}
