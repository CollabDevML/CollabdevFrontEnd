import { inject, Injectable } from '@angular/core';
import { GestionnaireDataService } from './gestionnaire/gestionnaire-data.service';
import { DataService } from './data.service';
import { Gestionnaire } from '../models/gestionnaire/gestionnaire';
import { map, Observable } from 'rxjs';

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
      utilisateur: data.utilisateur,
      uriCv: data.uriCv}
    )))
  }
}
