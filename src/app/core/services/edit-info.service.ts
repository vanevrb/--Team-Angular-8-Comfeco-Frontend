import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

import { UsersInfoResponse, Response } from '../interfaces';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EditInfoService {
  private baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  editUserInfo(user: any, token: string) {
    return this.http
      .put(`${this.baseUrl}/api/usuario`, user, {
        headers: new HttpHeaders({
          authorization: `Bearer ${token}`,
        }),
      })
      .pipe(
        // tap((data) => {
        //   console.log(data);
        // }),
        map<any, Response>((data) => {
          console.log(data);
          return {
            code: 200,
            message: data,
          };
        }),
        catchError((err) => {
          console.error(err);
          if (err.message) {
            return of({
              code: 500,
              message: 'algo salio mal, intenta más tarde',
              error: err,
            });
          }
        })
      );
  }

  getUserInfo(token: string): Observable<Response> {
    return this.http
      .get<UsersInfoResponse>(`${this.baseUrl}/api/usuario`, {
        headers: new HttpHeaders({
          authorization: `Bearer ${token}`,
        }),
      })
      .pipe(
        map<UsersInfoResponse, Response>((data) => {
          const { roles, usuClave, usuEstado, ...userInfo } = data;

          return {
            code: 200,
            message: userInfo,
          };
        }),
        catchError((err) => {
          console.error(err.error);
          if (err.message) {
            return of({
              code: 500,
              message: 'algo salio mal, intenta más tarde',
              error: err,
            });
          }
        })
      );
  }

  getCountries() {
    return this.http.get(`${this.baseUrl}/api/pais`);
  }

  getSkills() {
    return this.http.get(`${this.baseUrl}/api/conocimiento`);
  }

  getSocials() {
    return this.http.get(`${this.baseUrl}/api/red-social`);
  }
}
