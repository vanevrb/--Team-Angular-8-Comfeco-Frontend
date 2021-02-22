import { Injectable } from '@angular/core';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { SaveLocalService } from './save-local.service';

interface MyJwt extends JwtPayload {
  aud: string[];
  authorities: string[];
  client_id: string;
  scope: string[];
  user_name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DecodeService {
  constructor(private saveLocal: SaveLocalService) {}

  decode(token: string) {
    return jwtDecode<MyJwt>(token);
  }
}
