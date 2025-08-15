import { inject, Injectable } from '@angular/core';
import { GestionnaireDataService } from './gestionnaire/gestionnaire-data.service';
import { DataService } from './data.service';
import { Gestionnaire } from '../models/gestionnaire/gestionnaire';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { projet } from '../models/projet/projet';
import { HttpClient } from '@angular/common/http';

export interface Projet{
  id: number;
    titre: string;
     description: string;
     estFini: boolean;
    dateDebut: string;
    dateFin: string;
    niveauDAcces:string;
    etat:boolean;
    idGestionnaire:number;
   piecesDAcces:number;
    idIdeeProjet:number;
    taches :[];
   demandeContributions:[];

}
@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class DashboardgestionnaireServiceService {

  //injection de dépendances
  private gestionnaireS = inject(GestionnaireDataService)

  //fetch the data
  getGestionnaire(id:number):Observable<any>
  {
    this.gestionnaireS.getProjetGestionnaire(id).pipe(
      map(data => (
        {
      prenom : data.utilisateur.prenom,
      nom : data.utilisateur.nom,
      email : data.utilisateur.email,
      genre : data.utilisateur.genre,
      preferences : data.utilisateur.preferences ?? [],
      uriCV : data.uriCV,
      estValide : data.estValide,
      idGestionnaire : data.id,
      idUtilisateur : data.utilisateur.id,
      // si "projet" est présent dans la réponse
      projets : (data.projets ?? []).map((projet: projet) => ({
        id: projet.id,
        titre: projet.titre,
        description: projet.description,
        estFini : projet.estFini,
        etat: projet.etat,
        dateDebut: projet.dateDebut,
        dateFin: projet.dateFin,
        niveauDAcces: projet.niveauDAcces,
        demandeContributions: projet.demandeContributions,
        contributions: projet.contributions,
        taches: projet.taches,
        piecesDAcces: projet.piecesDAcces,
      })),
    }
    )))

    return this.gestionnaireS.getProjetGestionnaire(id);
  }

  //Calcul des stats
  projets: projet[] = [];

  private nbTerminesSubject = new BehaviorSubject<number>(0);
  private nbEnCoursSubject = new BehaviorSubject<number>(0);

  nbTermines$ = this.nbTerminesSubject.asObservable();
  nbEnCours$ = this.nbEnCoursSubject.asObservable();

  setProjets(projets: Projet[]) {
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
