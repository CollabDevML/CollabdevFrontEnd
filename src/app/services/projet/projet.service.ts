import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { projet } from '../../models/projet/projet';

import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { Env } from '../../env';
import { DataService } from '../data.service';


@Injectable({
 providedIn: 'root'
})
export class ProjetService {
 urlapi='http://localhost:8180/gestionnaires/projets/v2';
 constructor(private http:HttpClient,private dataG:DataService){}


 recupererprojet():Observable<projet[]>{
  console.log(this.urlapi)
   return this.http.get<projet[]>(this.urlapi)
 }

  // Récupérer tous les projets
  getprojets(): Observable<projet[]> {
    return this.dataG.getData(Env.PROJET);
  }

  // Supprimer un projet
  supprimerprojet(projetId: number): Observable<any> {
    return this.dataG.deleteData(`${Env.PROJET}/${projetId}`)
  }

  // Quitter un projet (alternative à la suppression)
  quitterprojet(projetId: number,data:any): Observable<any> {
    return this.dataG.patchData(`${Env.PROJET}/${projetId}/quitter`, data)
  }
 }




