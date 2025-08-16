export class Tache {
  // Attributs attendus de votre backend Spring Boot
  id!: number;
  titre!: string;
  description!: string;
  dateDebut!: Date;
  dateFin!: Date;
  piecesAGagner!: number;
  estFini!: boolean;
  niveau!: string;
  contributeur:[]=[]
}
