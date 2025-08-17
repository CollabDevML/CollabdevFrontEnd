import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Contributeur } from '../../models/contributeur/contributeur';
import { Env } from '../../env';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ContributeurDataService {
  constructor( private data: DataService) {}
  contributeur: any
  //Pour la creation d'un compte Contributeurs:
  addContributeur(contributeur: any): Observable<Contributeur> {
    return this.data.postData(Env.CREATE_CONTRIBUTEUR, contributeur);
  }

  //Pour l'upload d'un fichier:
  uploadCV(file: File,nomFichier:string): Observable<any> {
    return this.data.uploadFile(Env.UPLOAD_URL, file,nomFichier,"CV");
  }

  //recupérer un contributeur à partir de son icone
  setProjet(contributeur: any) {
    this.contributeur = contributeur
  }

  getProjet() {
    return this.contributeur;
  }

  //Pour lister tout les projets :
  listeProjet(){
    return this.data.getData(Env.PROJET+"/v2");
  }

  //Pour la demande de contribution :
  demandeContribution(demande:any){
    return this.data.postData(Env.PROJET+"/demandes-contribution",demande);
  }

  //Lister les projets d'un contributeur:
  listProjetContributeur(id:number){
    return this.data.getData(Env.CONTRIBUTEUR+"projets/"+id);
  }

}
