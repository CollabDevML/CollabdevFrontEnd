import { Enumerations } from '../enums/enums';

export class ResponseGestionnaire {
  prenom!: string;
  nom!: string;
  email!: string;
  genre!: Enumerations.Genre;
  preferences: [] = [];
  uriCV!: string;
  estValide!: boolean;
  idGestionnaire!: number;
  idUtilisateur!: number;
}
