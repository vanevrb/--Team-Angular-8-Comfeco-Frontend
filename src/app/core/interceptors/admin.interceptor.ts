import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UserService } from '../services/user.service';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
  private baseUrl = environment.BASE_URL;
  private credentials = btoa(
    `${environment.TOKEN_USERNAME}:${environment.TOKEN_PASSWORD}`
  );
  private basicAuthHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${this.credentials}`,
  });

  constructor(private userService: UserService) {}

  private getToken(req: HttpRequest<any>): HttpRequest<any> {
    if (req.url.includes('usuario') && req.method === 'POST') {
      return req;
    }
    if (req.url.includes('login')) {
      req = req.clone({
        headers: this.basicAuthHeaders,
      });
    } else {
      if (req.url.includes('recuperar') || req.url.includes('buscar')) {
        return req;
      }
    }
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
