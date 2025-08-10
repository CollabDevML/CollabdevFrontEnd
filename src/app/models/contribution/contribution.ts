import { Contributeur } from "../contributeur/contributeur";
import { Tache } from "../tache/tache";

export class Contribution {
    id!: number;
    estValider!: boolean;
    contributeur!:Contributeur;
    tache!: Tache;
}
