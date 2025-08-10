import { inject, Injectable } from '@angular/core';
import { GestionnaireDataService } from './gestionnaire/gestionnaire-data.service';
import { DataService } from './data.service';
import { Gestionnaire } from '../models/gestionnaire/gestionnaire';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { projet } from '../models/projet/projet';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class DashboardgestionnaireServiceService {
  
  //injection de dépendances
  private gestionnaireS = inject(GestionnaireDataService)

  //fetch the data
  getGestionnaire(id:number, role: string):Observable<any>
  {
    return this.gestionnaireS.getGestionnaire(id, role).pipe(
      map(data => (
        {
      prenom : data.user.prenom,
      nom : data.user.nom,
      email : data.utilisateur.email,
      genre : data.utilisateur.genre,
      preferences : data.utilisateur.preferences ?? [],
      uriCV : data.utilisateur.uriCV,
      estValide : data.utilisatuer.estValide,
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
        taches: projet.taches
      })),
    }
    )))
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
    const termines = this.projets.filter(p => p.estFini).length;
    //doit être changer côté backend
    const enCours = this.projets.filter(p => !p.etat).length;

    this.nbTerminesSubject.next(termines);
    this.nbEnCoursSubject.next(enCours);
  }
}
