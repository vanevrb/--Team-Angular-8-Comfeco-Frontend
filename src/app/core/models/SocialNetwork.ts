import { RedesSociales } from '../interfaces/RedesSociales';
export class SocialNetworks {
  public redesSociales: RedesSociales[];

  constructor(idPerfil: number, userByPosition: string[]) {
    this.redesSociales = userByPosition.map((val, i) => {
      return {
        perfil: { idPerfil },
        redSocial: { idRedSocial: i + 1 },
        usuario: val,
      };
    });
  }
}
