import { Contributeur } from "../contributeur/contributeur";
import { Tache } from "../tache/tache";

export class Contribution {
    id!: number;
    estValide!: boolean;
    nomProjet!:string;
    nomContributeur!: string;
    prenomContributeur!:string;
    nomTache!: string;
}
