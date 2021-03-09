import { Paises, Conocimientos, RedesSociales } from '.';
export interface Profile {
  idPerfil: number;
  genero?: number;
  pais?: Paises;
  conocimientos?: Array<Conocimientos>;
  redesSociales?: Array<RedesSociales>;
  fechaNacimiento?: string;
  biografia?: string;
  avatar?: string;
}
