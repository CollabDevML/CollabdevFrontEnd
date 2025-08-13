import { DomaineIdeeProjetService } from "../../services/domaine-idee-projet.service.service";
import { Enumerations } from "../enums/enums";
import { ResponseCommentaireIdeeProjet } from "./response-commentaire-idee-projet";
import { ResponseUserNames } from "./response-user-names";

export interface ResponseIdeeProjet2 {
  id: number;
  titre: string;
  description: string;
  domaine: Enumerations.DomaineIdeeProjet[];
  uriCDC: string;
  nombreSoutien: number;
  datePublication: string; // LocalDate en Java -> string en TS
  utilisateur: ResponseUserNames;
  commentaireIdeeProjets: ResponseCommentaireIdeeProjet[];
}
