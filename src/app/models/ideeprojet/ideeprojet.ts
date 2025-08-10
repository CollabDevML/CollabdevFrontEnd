export class Ideeprojet {
  id!: number;
  titre!: string;
  description!: string;
  domaine!: string;
  uriCDC!: string;
  nombreSoutien!: number;
  datePublication!: Date;
  idUtilisateur!: number;
  commentaireIdeeProjets!: {
    description: string;
    datePublication: Date;
    idutilisateur: Number;
  }[];
}
