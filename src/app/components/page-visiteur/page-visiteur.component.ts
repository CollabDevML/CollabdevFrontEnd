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
  mavaleur!:string
  boutonactive:'A'|'B'='A';
   changebouton(bouton:'A'|'B'){
   this.boutonactive=bouton
   
 }

 getDomainLabelsString(domaineKeys: string[]): string {
  return domaineKeys.map(key => this.domaineService.getLabelFromEnum(key)).join(', ');
}



  //contructeur
  constructor(private ideeprojetservice:IdeeprojetService,private projetservice:ProjetService,private domaineService: DomaineIdeeProjetService){};

  ngOnInit():void{
    this.ideeprojetservice.Recupererideeprojet().subscribe({
      next:(data)=>{
        this.listeideeprojet=data;
        console.log(this.listeideeprojet)
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
        console.log(this.listeprojet)
        },

      error:(erreur)=>{
        this.erreur="Une erreur est survenu lors du chargement";
        console.log("me voici", erreur)
      }
    })

   
    
  }


}
