import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { DataService } from '../data.service';
import { Env } from '../../env';
import { catchError, Observable, tap } from 'rxjs';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { projet } from '../../models/projet/projet';

@Injectable({
  providedIn: 'root',
})
export class AccueilService {
  constructor(private http: HttpClient, private data: DataService) {}

  apiUrl = 'http://localhost:8180/';

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

  // /utilisateurs/idees-projet/7/nombre-soutien?idUtilisateur=5
  // /utilisateurs/idees-projet/7/nombre-soutien?idUtilisateur=5

  soutenirUneIdeeProjet(
    idIdeeprojet: number,
    idUtilisateur: number
  ): Observable<Ideeprojet> {
    return this.data.postData(
      `${this.apiUrl}/utilisateurs/idees-projet/${idIdeeprojet}/nombre-soutien?idutilisateur=${idUtilisateur}`,
      Ideeprojet
    );
  }

  retirerSoutien(idIdeeprojet: number, idUtilisateur: number) {
    return this.data.deleteData(
      `${this.apiUrl}/utilisateurs/idees-projet/${idIdeeprojet}/nombre-soutien?idutilisateur=${idUtilisateur}`
    );
  }
}
