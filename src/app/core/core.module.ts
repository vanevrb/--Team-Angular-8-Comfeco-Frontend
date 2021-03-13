import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoaderInterceptor } from './interceptors/loader.interceptor';

import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { ValidationErrorsPipe } from './pipes/validation-errors.pipe';
import { RedesPipe } from './pipes/redes.pipe';

@NgModule({
  declarations: [DomSanitizerPipe, ValidationErrorsPipe, RedesPipe],
  imports: [HttpClientModule, ReactiveFormsModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    DomSanitizerPipe,
    ValidationErrorsPipe,
    RedesPipe,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
