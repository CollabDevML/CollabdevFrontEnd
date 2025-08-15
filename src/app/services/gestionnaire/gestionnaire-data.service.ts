import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Gestionnaire } from '../../models/gestionnaire/gestionnaire';
import { Env } from '../../env';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======
import { projet } from '../../models/projet/projet';
>>>>>>> main-copie
import { ResponseGestionnaire } from '../../models/gestionnaire/response-gestionnaire';

@Injectable({
  providedIn: 'root',
})

export class GestionnaireDataService {
  dataProjet!:projet;
  tacheData: any;
  constructor(private http: HttpClient, private data: DataService) {}
  url = Env.GET_GESTIONNAIRE;
  //Pour la creation d'un compte Gestionnaire:
  addGestionnaire(data:any):Observable<Gestionnaire>{
    return this.data.postData(Env.CREATE_GESTIONNAIRE,data);
  }

  ideeData:any;

  //Pour l'upload d'un fichier:
  uploadCV(file: File,nomFichier:string): Observable<any> {
    return this.data.uploadFile(Env.UPLOAD_URL, file,nomFichier,"CV");
  }

  //Pour recupérer un utilisateur de type gestionnaire
  getUtilisateurGestionnaire(id: number, role: string): Observable<ResponseGestionnaire>{
    return this.data.getDataById(Env.GET_UTILISATEURGESTIONNAIRE, id, role)
  }

  //Pour recupérer un gestionnaire
  getProjetGestionnaire(id: number): Observable<ResponseGestionnaire>{
    return this.data.getData(Env.PROJET_GESTIONNAIRE+id+"/"+"projets")
  }


  //Pour l'ajout des projets dans la base de donnee :
  addProjet(projet:any){
    return this.data.postData(Env.PROJET,projet);
  }

  //Pour lajout des taches :
  addTache(tache:any){
    return this.data.postData(Env.TACHE,tache);
  }

  listeTache(id:number){
    return this.data.getData(Env.TACHE+"?projetId="+id);
  }

  //Pour lister les contributeurs:
  listeContributeur(){
    return this.data.getData(Env.CREATE_CONTRIBUTEUR);
  }

  //La liste des contributeur a valider :
  //Pour la demande de contribution :
  demandeContributeurProjet(){
    return this.data.getData(Env.PROJET+"/demandes-contribution");
  }
}
