import { Paises, Conocimientos, RedesSociales } from '.';
export interface Profile {
  idPerfil?: number;
  genero: number;
  fechaNacimiento: string;
  biografia: string;
  pais: Paises;
  conocimientos: Array<Conocimientos>;
  redesSociales: Array<RedesSociales>;
}
