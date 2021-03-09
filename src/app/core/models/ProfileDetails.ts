import { Paises, Conocimientos, RedesSociales } from '../interfaces';
import { Profile } from '../interfaces/Profile';
import { CountryDetails } from './CountryDetails';
import { KnowledgeDetails } from './KnowledgeDetails';
import { SocialNetworks } from './SocialNetwork';

export class ProfileDetails implements Profile {
  public idPerfil: number;
  public genero?: number;
  public pais?: Paises;
  public biografia?: string;
  public fechaNacimiento?: string;
  public conocimientos?: Conocimientos[];
  public redesSociales?: RedesSociales[];
  public avatar?: string;

  constructor(
    idPerfil: number,
    genero: number,
    pais: number,
    biografia: string,
    fechaNacimiento: string,
    conocimientos: string[],
    redesSociales?: string[],
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
    this.avatar = avatar;
  }
}
