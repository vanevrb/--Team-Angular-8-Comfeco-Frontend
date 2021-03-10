import { Badges, Paises, Conocimientos, RedesSociales } from '.';

export interface Profile {
  idPerfil: number;
  genero?: number;
  puntaje?: number;
  pais?: Paises;
  conocimientos?: Array<Conocimientos>;
  redesSociales?: Array<RedesSociales>;
  insignias?: Array<Badges>;
  fechaNacimiento?: string;
  biografia?: string;
  avatar?: string;
}
