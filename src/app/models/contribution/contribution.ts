import { Contributeur } from "../contributeur/contributeur";
import { Tache } from "../tache/tache";

export class Contribution {
    id!:number;
    estValide!:boolean;
    nom_projet!:string;
    idTache!:number;
    descriptionTache!:string;
    idContributeur!:number;
    nom_contributeur!: string;
    prenom_contributeur!: string;
}
