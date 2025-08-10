export interface Task {
  // Attributs attendus de votre backend Spring Boot
  id: number;
  titre: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  pieceAGagner: number;
  niveau: string;
}
