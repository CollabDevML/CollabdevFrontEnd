import { Contribution } from "../contribution/contribution";

export class projet {
  id!: number;
    titre!: string;
    Description!: string;
    estFini!: boolean;
    etat!: boolean;
    dateDebut!: string;
    dateFin!: string;
    niveauDAcces!: string;
    demandeContributions!: any[];
    contributions!: any[];
    taches!: any[];
    piecesDAcces!:number;
    idGestionnaire!:number;
}
