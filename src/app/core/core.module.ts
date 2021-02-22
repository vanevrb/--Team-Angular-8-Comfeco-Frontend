import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { ValidationErrorsPipe } from './pipes/validation-errors.pipe';

@NgModule({
  declarations: [DomSanitizerPipe, ValidationErrorsPipe],
  imports: [HttpClientModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DomSanitizerPipe,
    ValidationErrorsPipe,
  ],
})
export class CoreModule {}
