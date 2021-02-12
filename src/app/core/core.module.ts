import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DomSanitizerPipe],
  imports: [HttpClientModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [HttpClientModule, ReactiveFormsModule, FontAwesomeModule],
})
export class CoreModule {}
