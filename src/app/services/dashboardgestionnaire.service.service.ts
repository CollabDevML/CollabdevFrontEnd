import { inject, Injectable } from '@angular/core';
import { GestionnaireDataService } from './gestionnaire/gestionnaire-data.service';
import { DataService } from './data.service';
import { Gestionnaire } from '../models/gestionnaire/gestionnaire';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { projet } from '../models/projet/projet';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class DashboardgestionnaireServiceService {
  //injection de dépendances
  private gestionnaireS = inject(GestionnaireDataService);
  data: any;
  //fetch the data
  getUtilisateurGestionnaire(id: number, role: string): Observable<any> {
    this.data = this.gestionnaireS.getUtilisateurGestionnaire(id, role);
    console.log(this.data)
    return this.data;
  }

  getGestionnaire(id = this.data.idGestionnaire): Observable<any> {
    return this.gestionnaireS.getGestionnaire(id).pipe(
      map((res) => ({
        prenom: res.utilisateur.prenom,
        nom: res.uitlisateur.nom,
        email: res.utilisateur.email,
        genre: res.utilisateur.genre,
        preferences: res.utilisateur.preferences ?? [],
        uriCV: res.uriCV,
        estValide: res.estValide,
        projets: (res.projets ?? []).map((projet:any) => ({
          id: projet.id,
          titre: projet.titre,
          description: projet.description,
          estFini: projet.estFini,
          etat: projet.etat,
          dateDebut: projet.dateDebut,
          dateFin: projet.dateFin,
          niveauDAcces: projet.niveauDAcces,
          demandeContributions: projet.demandeContributions,
          contributions: projet.contributions,
          taches: projet.taches,
          piecesDAcces: projet.piecesDAcces,
        })),
      }))
    );
  }

  //Calcul des stats
  projets: projet[] = [];

  private nbTerminesSubject = new BehaviorSubject<number>(0);
  private nbEnCoursSubject = new BehaviorSubject<number>(0);

  nbTermines$ = this.nbTerminesSubject.asObservable();
  nbEnCours$ = this.nbEnCoursSubject.asObservable();

  setProjets(projets: projet[]) {
    this.projets = projets;
    this.calculerStats();
  }

  private calculerStats() {
    const termines = this.projets.filter((p) => p.estFini).length;
    //doit être changer côté backend
    const enCours = this.projets.filter((p) => !p.etat).length;

    this.nbTerminesSubject.next(termines);
    this.nbEnCoursSubject.next(enCours);
  }
}
