export class Ideeprojet {
<<<<<<< HEAD
readonly id!:number;
public titre!:string;
public description!:string;
public domaine!:string;
public uriCDC!:string;
public nombreSoutien!:number;
public datePublication!:Date;
public utilisateur!:{prenom:string,nom:string};
public commentaireIdeeProjets!:{contenu:string;
dateCommentaire:Date;
 utilisateur:{prenom:string,nom:string,role:string}
id:number}[];

=======
  readonly id!: number;
  public titre!: string;
  public description!: string;
  public domaine!: string;
  public uriCDC!: string;
  public nombreSoutien!: number;
  public datePublication!: Date;
  public utilisateur!: { prenom: string; nom: string };
  public commentaireIdeeProjets!: {
    contenu: string;
    dateCommentaire: Date;
    utilisateur: { prenom: string; nom: string; role: string };
    id: number;
  }[];
>>>>>>> c96d192950db4f93533317dd7842b87ec1540190
}
