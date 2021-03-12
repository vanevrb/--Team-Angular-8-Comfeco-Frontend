import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { map, catchError, switchMap, filter } from 'rxjs/operators';

import {
  UsersInfoResponse,
  Response,
  RedesSocialesResponse,
} from '../interfaces';

import { environment } from '../../../environments/environment';
import { SaveLocalService } from './save-local.service';

@Injectable({
  providedIn: 'root',
})
export class EditInfoService {
  private baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient, private saveLocal: SaveLocalService) {}

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

  getUserInfo(): Observable<Response> {
    return from(this.saveLocal.getItem(environment.LOCAL_KEY_FOR_SAVE))
      .pipe(
        filter((data) => {
          console.log('uuuuusssssss', data);
          return true;
        }),
        switchMap((token) =>
          this.http.get<UsersInfoResponse>(`${this.baseUrl}/api/usuario`, {
            headers: new HttpHeaders({
              authorization: `Bearer ${token}`,
            }),
          })
        )
      )
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

  getSocials(): Observable<RedesSocialesResponse[]> {
    return this.http.get<RedesSocialesResponse[]>(
      `${this.baseUrl}/api/red-social`
    );
  }
}
