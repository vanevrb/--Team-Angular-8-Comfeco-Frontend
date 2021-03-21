import { Profile, Roles } from '.';

export interface UsersInfoResponse {
  perfil: Profile;
  roles: Array<Roles>;
  usuClave: string;
  usuCorreo: string;
  usuEstado?: boolean;
  usuId: number;
  usuNickname: string;
}
