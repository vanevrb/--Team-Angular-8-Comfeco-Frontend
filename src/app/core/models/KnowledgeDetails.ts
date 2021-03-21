import { Conocimientos } from '../interfaces/Conocimientos';
import { Knowledge } from '../enums/Knowledge';

export class KnowledgeDetails {
  public conocimientos: Conocimientos[];

  constructor(idsConocimientos: string[]) {
    this.conocimientos = idsConocimientos.map((idConoc) => ({
      idConocimiento: +idConoc,
      nombreConocimiento: Knowledge[+idConoc],
    }));
  }
}
