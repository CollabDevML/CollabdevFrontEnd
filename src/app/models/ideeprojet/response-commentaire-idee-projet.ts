import { ResponseUserNames } from "./response-user-names";

export interface ResponseCommentaireIdeeProjet {
  id: number;
  contenu: string;
  dateCommentaire: string; // LocalDate en Java → string en TypeScript
  utilisateur: ResponseUserNames;
}
