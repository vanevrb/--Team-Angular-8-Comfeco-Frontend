import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {
  UsersInfoResponse,
  Users,
  Response,
  Login,
  LoginResponse,
} from '../interfaces';

import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.BASE_URL;
  private credentials = btoa(
    `${environment.TOKEN_USERNAME}:${environment.TOKEN_PASSWORD}`
  );
  private basicAuthHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${this.credentials}`,
  });

  constructor(private http: HttpClient) {}

  newUser(user: Users): Observable<Response> {
    return this.http.post<Response>(`${this.baseUrl}/api/usuario`, user).pipe(
      catchError((err) => {
        console.error(err);
        return of({
          code: 400,
          message: 'Upss, algo salío mal, por favor reintenta más tarde',
          error: err,
        });
      })
    );
  }

  restorePassword(dataPassword: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/confirmation/change-password`, dataPassword)
      .pipe(
        catchError((err) => {
          console.error(err);
          return of({
            code: 400,
            message: 'Upss, algo salío mal, por favor reintenta más tarde',
            error: err,
          });
        })
      );
  }

  login(user: Login): Observable<Response> {
    const param = new URLSearchParams();
    param.set('grant_type', environment.grant_type);
    param.set('username', user.usuCorreo);
    param.set('password', user.usuClave);

    return this.http
      .post<LoginResponse>(`${this.baseUrl}/api/login`, param.toString(), {
        headers: this.basicAuthHeaders,
      })
      .pipe(
        map<LoginResponse, Response>((data) => ({
          code: 200,
          message: data,
        })),
        catchError((err) => {
          console.error(err.error);
          if (err.error.error === 'invalid_grant') {
            return of({
              code: 400,
              message: 'Parece que la información enviada no es valida',
              error: err,
            });
          } else {
            return of({
              code: 500,
              message: 'algo salio mal, intenta más tarde',
              error: err,
            });
          }
        })
      );
  }

  forgotPassword(email: string): Observable<Response> {
    return this.http.get<Response>(
      `${this.baseUrl}/api/usuario/recuperar/${email}`
    );
  }

  canRegisterEmail(email: string) {
    return this.http.get(`${this.baseUrl}/api/usuario/buscar/correo/${email}`);
  }
  canRegisterNick(nick: string) {
    return this.http.get(`${this.baseUrl}/api/usuario/buscar/nickname/${nick}`);
  }
}
