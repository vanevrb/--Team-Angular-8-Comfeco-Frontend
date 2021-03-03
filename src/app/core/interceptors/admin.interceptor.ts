import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SaveLocalService } from '../services/save-local.service';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
  constructor(private saveLocal: SaveLocalService) {}

  private getToken(req: HttpRequest<any>): HttpRequest<any> {
    const data = this.saveLocal.getItem(environment.LOCAL_KEY_FOR_SAVE) as any;
    console.log({ data });
    if (data) {
      req = req.clone({
        headers: req.headers.set(
          'authorization',
          `Bearer ${data.access_token}`
        ),
      });
    }
    console.log(req);
    return req;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = this.getToken(req);
    return next.handle(req);
  }
}
