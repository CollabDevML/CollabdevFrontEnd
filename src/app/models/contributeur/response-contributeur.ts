import { Enumerations } from '../enums/enums';

export class ResponseContributeur {
  prenom!: string;
  nom!: string;
  email!: string;
  genre!: Enumerations.Genre;
  preferences!: [];
  niveau!:Enumerations.Niveau;
  specialite !:string ;
  type !: Enumerations.Type;
  pieces!:number;
  uriCv!:string;
  idContributeur !: number;

}
