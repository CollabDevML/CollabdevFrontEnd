import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { DataService } from '../data.service';
import { Env } from '../../env';
import { catchError, Observable, tap } from 'rxjs';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { projet } from '../../models/projet/projet';
import { Soutien } from '../../models/soutien';

@Injectable({
  providedIn: 'root',
})
export class AccueilService {
  constructor(private http: HttpClient, private data: DataService) {}

  apiUrl = 'http://localhost:8180';

  readonly urlIdee = Env.GETRECOMMANDATIONIDEEPROJET;
  readonly urlProjet = Env.GETRECOMMANDATIONPROJET;
  private ideeProjets = signal<Ideeprojet[]>([]);
  private projets = signal<projet[]>([]);

  getRecommandationByideeProjet(id: number): Observable<Ideeprojet[]> {
    return this.data.getData(`${this.urlIdee}/${id}`).pipe(
      tap((ideeProjets) => this.ideeProjets.set(ideeProjets)),
      catchError((error) => {
        console.error(
          'Erreur lors de la récupération des idées de projet',
          error
        );
        throw error;
      })
    );
  }
  getRecommandationByProjet(id: number): Observable<projet[]> {
    return this.data.getData(`${this.urlProjet}/${id}`).pipe(
      tap((projets) => this.projets.set(projets)),
      catchError((error) => {
        console.error(
          'Erreur lors de la récupération des idées de projet',
          error
        );
        throw error;
      })
    );
  }

  soutenirUneIdeeProjet(
    idIdeeprojet: number,
    idUtilisateur: number
  ): Observable<Soutien> {
    let params = new HttpParams().set(
      'idUtilisateur',
      idUtilisateur.toString()
    );

    return this.http.post<Soutien>(
      `${this.apiUrl}/utilisateurs/idees-projet/${idIdeeprojet}/nombre-soutien`,
      null, // Corps vide car on envoie juste des params
      { params } // <- Ici dans les options, pas dans le body
    );
  }

  retirerSoutien(
    idIdeeprojet: number,
    idUtilisateur: number
  ): Observable<Soutien> {
    let params = new HttpParams().set(
      'idUtilisateur',
      idUtilisateur.toString()
    );
    return this.http.delete<Soutien>(
      `${this.apiUrl}/utilisateurs/idees-projet/${idIdeeprojet}/nombre-soutien`,
      { params }
    );
  }
}
