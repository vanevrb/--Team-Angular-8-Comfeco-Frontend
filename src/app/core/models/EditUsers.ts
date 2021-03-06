import { Paises, Conocimientos, RedesSociales, Profile } from '../interfaces';

export class EditUsers {
  usuNickname: string;
  usuCorreo: string;
  usuId: number;
  perfil: Profile;

  constructor(
    usuNickname: string,
    usuCorreo: string,
    usuId: number,
    perfil: Profile
  ) {
    this.usuNickname = usuNickname;
    this.usuCorreo = usuCorreo;
    this.usuId = usuId;
    this.perfil = perfil;
  }
}

// import { Paises, Conocimientos, RedesSociales } from '../interfaces';
// import { Profile } from '../interfaces/Profile';

// export class EditUsers implements Profile {
//   usuNickname: string;
//   usuCorreo: string;
//   usuId: number;
//   perfil: Profile;
//   idPerfil: number;
//   genero: number;
//   fechaNacimiento: string;
//   biografia: string;
//   pais: Paises;
//   conocimientos: Conocimientos[];
//   redesSociales: RedesSociales[];

//   constructor(
//     usuNickname: string,
//     usuCorreo: string,
//     usuId: number,
//     perfil: Profile
//   ) {
//     this.usuNickname = usuNickname;
//     this.usuCorreo = usuCorreo;
//     this.usuId = usuId;
//     this.idPerfil = perfil.idPerfil;
//     this.genero = perfil.genero;
//     this.fechaNacimiento = perfil.fechaNacimiento;
//     this.biografia = perfil.biografia;
//     this.pais = perfil.pais;
//     this.conocimientos = perfil.conocimientos;
//     this.redesSociales = perfil.redesSociales;
//   }
// }
