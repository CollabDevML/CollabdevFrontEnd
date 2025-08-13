// src/app/services/tache.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RequestTache {
  titre: string;
  description: string;
  pieceAGagner: number;
  dateDebut: string; // format ISO string
  dateFin: string;
  estFini: boolean;
  niveau: string;
  idContributeur: number;
  idProjet: number;
}

export interface ResponseTache {
  id: number;
  titre: string;
  description: string;
  dateDebut: string;
  dateFin: string;
  pieceAGagner: number;
  niveau: string;
  status: String;
}

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private apiUrl = 'http://localhost:8080/utilisateurs/gestionnaires/projets/taches';

  constructor(private http: HttpClient) {}

  ajouterTache(tache: RequestTache): Observable<RequestTache> {
    return this.http.post<RequestTache>(this.apiUrl, tache);
  }

  getTaches(projetId: number): Observable<ResponseTache[]> {
    const params = new HttpParams()
    .set('projetId', projetId)
    return this.http.get<ResponseTache[]>(`${this.apiUrl}`,{params});
  }
}
