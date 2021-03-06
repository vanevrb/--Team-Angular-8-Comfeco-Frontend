import { Profile } from '../interfaces/Profile';

export class EditUsers {
  constructor(
    private usuNickname: string,
    private usuCorreo: string,
    private usuId: number,
    private perfil: Profile
  ) {}
  toString() {
    return `${this.usuNickname}, ${this.usuCorreo}, ${
      this.usuId
    }, ${JSON.stringify(this.perfil)}`;
  }
}
