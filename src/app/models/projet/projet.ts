export class projet{
    id!:number
     titre!:string;
   description!:string;
   estFini!:boolean;
   dateDebut!:Date;
   dateFin!:Date;
   niveauDAcces!: string;
   utilisateur!:{prenom:string,nom:string}
   etat!:boolean;
   idGestionnaire!:number;
   piecesDAcces!:number;
   gestionnaire!: { prenom: string, nom: string }; // ✅ objet
   porteur!: { prenom: string, nom: string };   
  
   nombreContributeurs!:number
  commentaires!: 
            {
                id:number,
                contenu:string,
                dateCommentaire: Date,
                utilisateur: {
                    prenom:string,
                    nom:string
                }
            }[]
            

 }
