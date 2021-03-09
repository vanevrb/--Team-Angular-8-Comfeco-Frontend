import { Profile } from '../interfaces';

export class EditUsers {
  constructor(
    public usuId: number,
    public usuNickname: string,
    public usuCorreo: string,
    public perfil: Profile
  ) {}
}
