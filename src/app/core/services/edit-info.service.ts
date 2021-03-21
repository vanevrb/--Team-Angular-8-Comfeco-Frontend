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
import { Paises } from '../interfaces/Paises';
import { Conocimientos } from '../interfaces/Conocimientos';

@Injectable({
  providedIn: 'root',
})
export class EditInfoService {
  private baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient, private saveLocal: SaveLocalService) {}

  editUserInfo(user: any) {
    return from(this.saveLocal.getItem(environment.LOCAL_KEY_FOR_SAVE)).pipe(
      switchMap((token) =>
        this.http
          .put(`${this.baseUrl}/api/usuario`, user, {
            headers: new HttpHeaders({
              authorization: `Bearer ${token}`,
            }),
          })
          .pipe(
            map<any, Response>((data) => {
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
          )
      )
    );
  }

  getUserInfo(): Observable<Response> {
    return from(this.saveLocal.getItem(environment.LOCAL_KEY_FOR_SAVE))
      .pipe(
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

  setAvatar(avatar: string) {
    return from(this.saveLocal.getItem(environment.LOCAL_KEY_FOR_SAVE)).pipe(
      switchMap((token) =>
        this.http.put(`${this.baseUrl}/api/perfil/editar/avatar`, avatar, {
          headers: new HttpHeaders({
            authorization: `Bearer ${token}`,
          }),
        })
      )
    );
  }

  getGrupo() {
    return from(this.saveLocal.getItem(environment.LOCAL_KEY_FOR_SAVE)).pipe(
      switchMap((token) =>
        this.http.get(`${this.baseUrl}/api/grupo`, {
          headers: new HttpHeaders({
            authorization: `Bearer ${token}`,
          }),
        })
      )
    );
  }

  getCountries(): Observable<Paises[]> {
    return this.http.get<Paises[]>(`${this.baseUrl}/api/pais`);
  }

  getSkills(): Observable<Conocimientos[]> {
    return this.http.get<Conocimientos[]>(`${this.baseUrl}/api/conocimiento`);
  }

  getSocials(): Observable<RedesSocialesResponse[]> {
    return this.http.get<RedesSocialesResponse[]>(
      `${this.baseUrl}/api/red-social`
    );
  }
}
