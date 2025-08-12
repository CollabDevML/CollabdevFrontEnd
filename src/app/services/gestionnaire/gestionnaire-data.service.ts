import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Gestionnaire } from '../../models/gestionnaire/gestionnaire';
import { Env } from '../../env';
import { Observable } from 'rxjs';
import { ResponseGestionnaire } from '../../models/gestionnaire/response-gestionnaire';

@Injectable({
  providedIn: 'root',
})

export class GestionnaireDataService {
  constructor(private http: HttpClient, private data: DataService) {}
  url = Env.GET_GESTIONNAIRE;
  //Pour la creation d'un compte Gestionnaire:
  addGestionnaire(data:any):Observable<Gestionnaire>{
    return this.data.postData(Env.CREATE_GESTIONNAIRE,data);
  }

  //Pour l'upload d'un fichier:
  uploadCV(file: File,nomFichier:string): Observable<any> {
    return this.data.uploadFile(Env.UPLOAD_URL, file,nomFichier,"CV");
  }

  //Pour recupérer un utilisateur de type gestionnaire
  getUtilisateurGestionnaire(id: number, role: string): Observable<ResponseGestionnaire>{
    return this.data.getDataById(Env.GET_UTILISATEURGESTIONNAIRE, id, role)
  }

  //Pour recupérer un gestionnaire
  getGestionnaire(id: number):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }
}
