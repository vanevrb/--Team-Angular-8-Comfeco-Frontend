import {
  Paises,
  Profile,
  Badges,
  Conocimientos,
  RedesSociales,
} from '../interfaces';
import { CountryDetails } from './CountryDetails';
import { KnowledgeDetails } from './KnowledgeDetails';
import { SocialNetworks } from './SocialNetwork';
import { myBadges } from '../../profile/mockup/myBadges';

export class ProfileDetails implements Profile {
  public idPerfil: number;
  public genero?: number;
  public pais?: Paises;
  public biografia?: string;
  public fechaNacimiento?: string;
  public conocimientos?: Conocimientos[];
  public redesSociales?: RedesSociales[];
  public insignias?: any[];
  public avatar?: string;
  public puntaje?: number;

  constructor(
    idPerfil: number,
    genero: number,
    pais: number,
    biografia: string,
    fechaNacimiento: string,
    conocimientos: string[],
    redesSociales?: string[],
    puntaje?: number,
    avatar?: string
  ) {
    this.idPerfil = idPerfil;
    this.genero = genero;
    this.pais = new CountryDetails(pais);
    this.conocimientos = new KnowledgeDetails(conocimientos).conocimientos;
    this.redesSociales = new SocialNetworks(
      idPerfil,
      redesSociales
    ).redesSociales;
    this.biografia = biografia;
    this.fechaNacimiento = fechaNacimiento;
    if (puntaje > 0) {
      this.puntaje = puntaje;
      if (puntaje === 1) {
        this.insignias = myBadges.filter((item) => item.idInsignia === 1);
      }
    }
    if (avatar) {
      this.avatar = avatar;
    }
  }
}
