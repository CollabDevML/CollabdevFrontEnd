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

  //   constructor(
  //     titre: string,
  //     id: number,
  //     description: string,
  //     domain: string,
  //     uricdc: string,
  //     nombreSoutien: number,
  //     datePublication: Date,
  //     idUtilisateur: number,
  //     commentaireIdeeProjets: {
  //       description: string;
  //       datePublication: Date;
  //       idutilisateur: Number;
  //     }[]
  //   ) {
  //     (this.id = id),
  //       (this.titre = titre),
  //       (this.commentaireIdeeProjets = commentaireIdeeProjets),
  //       (this.datePublication = datePublication),
  //       (this.description = description),
  //       (this.idUtilisateur = idUtilisateur),
  //       (this.domaine = domain),
  //       (this.nombreSoutien = nombreSoutien),
  //       (this.uriCDC = uricdc);
  //   }

  //   //id
  //   get getId(): number {
  //     return this.id;
  //   }

  //   set setId(id: number) {
  //     this.id = id;
  //   }
  //   //titre
  //   get getTitre(): string {
  //     return this.titre;
  //   }

  //   set setTitre(titre: string) {
  //     this.titre = titre;
  //   }
  //   //Description
  //   get getDescription(): string {
  //     return this.description;
  //   }
  //   set setDescription(description: string) {
  //     this.description = description;
  //   }
  //   //Domaine

  //   get getDomain(): string {
  //     return this.domaine;
  //   }

  //   set setDomain(domain: string) {
  //     this.domaine = domain;
  //   }

  //   get getUriCdc(): string {
  //     return this.uriCDC;
  //   }

  //   set setUriCdc(uriCdc: string) {
  //     this.uriCDC = uriCdc;
  //   }

  //   get getNumbreDeSoutien(): number {
  //     return this.nombreSoutien;
  //   }

  //   set setNumberDeSoutien(nombreSoutien: number) {
  //     this.nombreSoutien = nombreSoutien;
  //   }

  //   get getDatePublicatipon(): Date {
  //     return this.datePublication;
  //   }

  //   set setDatePublication(datePublication: Date) {
  //     this.datePublication = datePublication;
  //   }

  //   get getIdUtilisateur(): number {
  //     return this.idUtilisateur;
  //   }

  //   set setIdUtilisateur(id: number) {
  //     this.idUtilisateur = id;
  //   }

  //   get getcommentaireIdeeProjets(): {
  //     description: string;
  //     datePublication: Date;
  //     idutilisateur: Number;
  //   }[] {
  //     return this.commentaireIdeeProjets;
  //   }

  //   set setCommentaireIdeeProjets(
  //     commentaireIdeeProjets: {
  //       description: string;
  //       datePublication: Date;
  //       idutilisateur: Number;
  //     }[]
  //   ) {
  //     this.commentaireIdeeProjets = commentaireIdeeProjets;
  //   }
}
