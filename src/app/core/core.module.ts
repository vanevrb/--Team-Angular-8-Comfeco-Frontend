import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { ValidationErrorsPipe } from './pipes/validation-errors.pipe';

@NgModule({
  declarations: [DomSanitizerPipe, ValidationErrorsPipe],
  imports: [HttpClientModule, ReactiveFormsModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    DomSanitizerPipe,
    ValidationErrorsPipe,
  ],
})
export class CoreModule {}
