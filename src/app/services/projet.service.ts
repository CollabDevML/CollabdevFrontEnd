import { Injectable } from "@angular/core"
import type { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"
import type { projet } from "../models/projet/projet.ts"
import { Env } from "../env.js"
import { DataService } from "./data.service.js"

@Injectable({
  providedIn: "root",
})
export class ProjetService {

 
  constructor(private dataG:DataService) {}

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
