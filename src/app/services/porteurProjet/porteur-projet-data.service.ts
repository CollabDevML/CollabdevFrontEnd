import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Env } from '../../env';
import { PorteurProjet } from '../../models/porteurProjet/porteur-projet';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root',
})
export class PorteurProjetDataService {
  constructor(private http: HttpClient, private data: DataService) {}
  //Pour la creation d'un compte PorteurProjet:
  addPorteur(user: Users): Observable<PorteurProjet> {
    return this.data.postData(Env.CREATE_PORTER_PROJET, user);
  }



  //Pour l'upload d'un fichier:
  uploadCDC(file: File,nomFichier:string): Observable<any> {
    return this.data.uploadFile(Env.UPLOAD_URL, file,nomFichier,"CDC");
  }

  //Pour la creation d'idee de projet :
  newIdee(ideeProjet:any){
    const idPorteur = localStorage.getItem('user_id');
    return this.data.postData(Env.INSCRIPTION_URL+"/"+idPorteur+"/"+"idees-projet", ideeProjet);
  }

  //Lister les idees de projet :
  listeIdeeProjet(){
    return this.data.getData(Env.IDEEPROJETLISTE);
  }

  //soutenir une idee de projet :

  soutenirIdeeProjet(idIdeeProjet:number){
    const idPorteur = Number(localStorage.getItem('user_id'));
    return this.data.postData(Env.IDEEPROJETLISTE+"/"+idIdeeProjet+"/nombre-soutien",{idUtilisateur:idPorteur});
  }

  //Pour lister mes projet en cours :
  listeMesProjet(){}

}
