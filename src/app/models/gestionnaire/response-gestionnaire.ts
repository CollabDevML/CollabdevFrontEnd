import { Enumerations } from '../enums/enums';
import { projet } from '../projet/projet';

export class ResponseGestionnaire {
  prenom!: string;
  nom!: string;
  email!: string;
  genre!: Enumerations.Genre;
  preferences: []=[];
  uriCV!: string;
  estValide!: boolean;
  idGestionnaire!: number;
  idUtilisateur!: number;
  projets: projet[] = []
  utilisateur: any;
  id: any;
}
