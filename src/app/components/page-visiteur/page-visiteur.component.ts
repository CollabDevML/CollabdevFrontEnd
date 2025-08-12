import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { IdeeprojetService } from '../../services/ideeprojet/ideeprojet.service';
import { ReduirelatailleducommentairePipe } from '../../Pipe/reduirelatailleducommentaire.pipe';
import { ProjetService} from '../../services/projet/projet.service';
import { projet } from '../../models/projet/projet';
import { FormsModule } from '@angular/forms';
import { DomaineIdeeProjetService } from '../../services/domaine-idee-projet.service.service';
import { Router } from '@angular/router';

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
   this.search()
   
 }

 getDomainLabelsString(domaineKeys: string[]): string {
  return domaineKeys.map(key => this.domaineService.getLabelFromEnum(key)).join(', ');
}

  

    
   

  //contructeur
  constructor(private ideeprojetservice:IdeeprojetService,private projetservice:ProjetService,private domaineService: DomaineIdeeProjetService,private route:Router){};

  ngOnInit():void{
   
    this.ideeprojetservice.Recupererideeprojet().subscribe({
      next:(data)=>{
        this.listeideeprojet=data;
        this.search()
        console.log(this.listeideeprojet)
        console.log(this.listeideeprojetfilter)
       
   

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
       this.listeprojet.forEach(projet =>{
        if(projet.estFini){
          this.mavaleur='Fini'
        }else{this.mavaleur='En cours'}
       })
        
      

        //methode de recherche
      
        console.log(this.listeprojetfilter)
        console.log(this.listeprojet)
        },

      error:(erreur)=>{
        this.erreur="Une erreur est survenu lors du chargement";
        console.log("me voici", erreur)
      }
    })

   //methode recherche

  
    
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
cliquezMoi(donnee:any){
  this.projetservice.donneeIdeeProjet = donnee;
  this.route.navigate([""])
}


}
