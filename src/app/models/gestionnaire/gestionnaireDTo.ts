import { Enumerations } from '../enums/enums';

export interface GestionnaireDto {
  id: number;
  utilisateur: {
    id: number;
    prenom: string;
    nom: string;
    email: string;
    motDePasse: string;
    genre: Enumerations.Genre;
    role: Enumerations.Role;
    etat: boolean;
    preferences: [];
    gestionsAdminUtilisateur: [];
  };
  uriCv: string;
  estValide: boolean;
  projets: [];
}
