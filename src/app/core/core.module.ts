import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { LoaderInterceptor } from './interceptors/loader.interceptor';

import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { ValidationErrorsPipe } from './pipes/validation-errors.pipe';
import { RedesPipe } from './pipes/redes.pipe';
import { FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [DomSanitizerPipe, ValidationErrorsPipe, RedesPipe,FilterPipe],
  imports: [HttpClientModule, ReactiveFormsModule,FormsModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DomSanitizerPipe,
    ValidationErrorsPipe,
    RedesPipe,
    FilterPipe,
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
