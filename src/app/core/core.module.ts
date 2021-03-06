import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { ValidationErrorsPipe } from './pipes/validation-errors.pipe';
import { AdminInterceptor } from './interceptors/admin.interceptor';

@NgModule({
  declarations: [DomSanitizerPipe, ValidationErrorsPipe],
  imports: [HttpClientModule, ReactiveFormsModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    DomSanitizerPipe,
    ValidationErrorsPipe,
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AdminInterceptor,
  //     multi: true,
  //   },
  // ],
})
export class CoreModule {}
