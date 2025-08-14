import { Contribution } from "../contribution/contribution";

export class projet {
  id: number = 0;
    titre: string="";
    description: string="";
    estFini: boolean=false;
    etat: boolean=false;
    dateDebut: string="";
    dateFin: string="";
    niveauDAcces: string="";
    demandeContributions: any[]=[];
    contributions: any[]=[];
    taches: any[]=[];
    piecesDAcces:number=0;
    idGestionnaire:number=0;
}
