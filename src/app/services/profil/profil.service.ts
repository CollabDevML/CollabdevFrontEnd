import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Utilisateur {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  genre: string;
  role: string;
  etat: boolean;
  preferences: string[];
  // autres champs si besoin
}

export interface ReponseProfil {
  id: number;
  utilisateur: Utilisateur;
  uriCv: string;
  estValide: boolean;
  projets: any[];
}
export interface Projet {
  id: number;
  titre: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private baseUrl = 'http://localhost:8180/utilisateurs/gestionnaires';

  constructor(private http: HttpClient) {}

  getUtilisateurById(id: number): Observable<ReponseProfil> {
    return this.http.get<ReponseProfil>(`${this.baseUrl}/${id}`);
  }

  updatePreferences(id: number, preferences: string[]): Observable<string[]> {
    return this.http.put<string[]>(`${this.baseUrl}/${id}`, preferences);
  }
}
