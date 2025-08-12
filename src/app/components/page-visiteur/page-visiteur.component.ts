import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { IdeeprojetService } from '../../services/ideeprojet/ideeprojet.service';
import { ReduirelatailleducommentairePipe } from '../../Pipe/reduirelatailleducommentaire.pipe';
import { ProjetService} from '../../services/projet/projet.service';
import { projet } from '../../models/projet/projet';
import { FormsModule } from '@angular/forms';
import { DomaineIdeeProjetService } from '../../services/domaine-idee-projet.service.service';

@Component({
  selector: 'app-page-visiteur',
  imports: [CommonModule,ReduirelatailleducommentairePipe,FormsModule],
  templateUrl: './page-visiteur.component.html',
  styleUrl: './page-visiteur.component.css'
})
export class PageVisiteurComponent {
  listeideeprojet!:Ideeprojet[];
  listeprojet!:projet[]
  messageerreur!:String;
  erreur!:String;
  liste!:any[];
  recherche:string=''
  mavaleur!:string
  listeideeprojetfilter!:Ideeprojet[]
  listeprojetfilter!:projet[]
  boutonactive:'A'|'B'='A';
   changebouton(bouton:'A'|'B'){
   this.boutonactive=bouton
   
 }

 getDomainLabelsString(domaineKeys: string[]): string {
  return domaineKeys.map(key => this.domaineService.getLabelFromEnum(key)).join(', ');
}

   //recherche
   search() {
  const saisi = this.recherche.toLowerCase().trim();

  if (this.boutonactive === 'A') {
    // Recherche sur les idées de projet
    if (saisi === '') {
      this.listeideeprojetfilter = this.listeideeprojet;
    } else {
      this.listeideeprojetfilter = this.listeideeprojet.filter(donnée =>
        donnée.titre.toLowerCase().includes(saisi) ||
        donnée.description.toLowerCase().includes(saisi)
      );
    }

  } else if (this.boutonactive === 'B') {
    // Recherche sur les projets
    if (saisi === '') {
      this.listeprojetfilter = this.listeprojet;
    } else {
      this.listeprojetfilter = this.listeprojet.filter(projet =>
        projet.titre.toLowerCase().includes(saisi) ||
        projet.description.toLowerCase().includes(saisi)
      );
    }
  }
}

    
   

  //contructeur
  constructor(private ideeprojetservice:IdeeprojetService,private projetservice:ProjetService,private domaineService: DomaineIdeeProjetService){};

  ngOnInit():void{
    this.ideeprojetservice.Recupererideeprojet().subscribe({
      next:(data)=>{
        this.listeideeprojet=data;
        console.log(this.listeideeprojet)
        //test
        this.listeideeprojet = [
  {
    id: 1,
    titre: 'Application mobile de gestion',
    description: 'Une appli pour gérer ses tâches quotidiennes',
    domaine: 'Productivité',
    uriCDC: 'http://exemple.com/cdc1',
    nombreSoutien: 15,
    datePublication: new Date('2024-01-10'),
    utilisateur: { prenom: 'Sophie', nom: 'Durand' },
    commentaireIdeeProjets: [
      {
        id: 1,
        contenu: 'Super idée !',
        datePublication: new Date('2024-01-12'),
        utilisateur: { prenom: 'Paul', nom: 'Martin' }
      }
    ]
  },
  {
    id: 2,
    titre: 'Plateforme de e-learning',
    description: 'Site web pour apprendre en ligne facilement',
    domaine: 'Éducation',
    uriCDC: 'http://exemple.com/cdc2',
    nombreSoutien: 22,
    datePublication: new Date('2024-02-05'),
    utilisateur: { prenom: 'Lucas', nom: 'Martin' },
    commentaireIdeeProjets: []
  }
];

      },
      error:(erreur)=>{
        console.log(erreur);
        this.messageerreur="Une erreur est survenu lors du chargement";
      }
    })

    //projet


    this.projetservice.recupererprojet().subscribe({
      next:(data)=>{
        this.listeprojet=data;
       if(this.listeprojet.some((projet =>
        projet.estFini))){
          this.mavaleur='Fini'
        }else{this.mavaleur='Encours'}
        //test
        this.listeprojet = [
  {
    id: 101,
    titre: 'Site e-commerce',
    description: 'Création d’une boutique en ligne moderne',
    estFini: false,
    dateDebut: new Date('2024-04-01'),
    dateFin: new Date('2024-12-31'),
    niveauDAcces: 'Public',
    utilisateur: { prenom: 'Clara', nom: 'Petit' },
    etat: true,
    idGestionnaire: 1,
    piecesDAcces: 5,
    gestionnaire: { prenom: 'Paul', nom: 'Lemoine' },
    porteur: { prenom: 'Clara', nom: 'Petit' },
    nombreContributeurs: 10,
    commentaires: [
      {
        id: 1,
        contenu: 'Projet très intéressant',
        dateCommentaire: new Date('2024-04-10'),
        utilisateur: { prenom: 'Emma', nom: 'Leroy' }
      }
    ]
  },
  {
    id: 102,
    titre: 'Application fitness',
    description: 'App mobile pour suivre ses séances de sport',
    estFini: false,
    dateDebut: new Date('2024-05-15'),
    dateFin: new Date('2024-11-30'),
    niveauDAcces: 'Privé',
    utilisateur: { prenom: 'Maxime', nom: 'Moreau' },
    etat: true,
    idGestionnaire: 2,
    piecesDAcces: 3,
    gestionnaire: { prenom: 'Julie', nom: 'Bernard' },
    porteur: { prenom: 'Maxime', nom: 'Moreau' },
    nombreContributeurs: 5,
    commentaires: []
  }
];

      

        //methode de recherche
      
        
        console.log(this.listeprojet)
        },

      error:(erreur)=>{
        this.erreur="Une erreur est survenu lors du chargement";
        console.log("me voici", erreur)
      }
    })

   //methode recherche

   this.boutonactive='A'
   this.search()
    
  }


}
