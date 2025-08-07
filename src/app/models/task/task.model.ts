export interface Task {
  // Attributs attendus de votre backend Spring Boot
  titre: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  pieceAGagner: number;
  niveau: string;

  // Attributs ajoutés ou calculés côté front-end pour l'affichage
  id?: number;
  status?: 'Terminé' | 'En cours' | 'À faire';
  assignee?: { name: string; avatar: string; };
}
