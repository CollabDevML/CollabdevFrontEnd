import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Gestionnaire } from '../../models/gestionnaire/gestionnaire';
import { Env } from '../../env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GestionnaireDataService {
  constructor(private http: HttpClient, private data: DataService) {}
  //Pour la creation d'un compte Gestionnaire:
  addGestionnaire(data: any): Observable<Gestionnaire> {
    return this.data.postData(Env.CREATE_GESTIONNAIRE, data);
  }

  //Pour l'upload d'un fichier:
  uploadCV(file: File, nomFichier: string): Observable<any> {
    return this.data.uploadFile(Env.UPLOAD_URL, file, nomFichier, 'CV');
  }

  //Pour recupérer un gestionnaire
  getGestionnaire(id: number): Observable<any> {
    return this.data.getById(Env.GET_GESTIONNAIRE, id);
  }

  //Pour l'ajout des projets dans la base de donnee :
  addProjet(projet: any) {
    return this.data.postData(Env.PROJET, projet);
  }

  //Pour lajout des taches :
  addTache(tache: any) {
    return this.data.postData(Env.TACHE, tache);
  }

  listeTache(id: number) {
    return this.data.getData(Env.TACHE + '?projetId=' + id);
  }

  //Pour lister les contributeurs:
  listeContributeur() {
    return this.data.getData(Env.CREATE_CONTRIBUTEUR);
  }
}
