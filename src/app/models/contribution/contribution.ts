import { Contributeur } from "../contributeur/contributeur";
export class Contribution {
    id!: number;
    estValide!: boolean;
    nomProjet!:string;
    nomContributeur!: string;
    prenomContributeur!:string;
    nomTache!: string;
}
