import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseIdeeProjet2 } from '../models/ideeprojet/response-idee-projet2';
import { Observable, map } from 'rxjs';
import { isDuration } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class IdeesProjetService {

  private baseUrl: string = 'http://localhost:8180/utilisateurs'

  public constructor(private httpClient: HttpClient){}

  getUserIdeas(userId: number): Observable<ResponseIdeeProjet2[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/${userId}/idees-projet`).pipe(
      map((responseIdeeProjets: ResponseIdeeProjet2[]) => responseIdeeProjets.map( responseIdeeProjet => ({
        id: responseIdeeProjet.id,
        titre: responseIdeeProjet.titre,
        description: responseIdeeProjet.description,
        domaine: responseIdeeProjet.domaine,
        uriCDC: responseIdeeProjet.uriCDC,
        nombreSoutien: responseIdeeProjet.nombreSoutien,
        datePublication: responseIdeeProjet.datePublication,
        utilisateur: responseIdeeProjet.utilisateur,
        commentaireIdeeProjets: responseIdeeProjet.commentaireIdeeProjets
      })))
    );
  }

  helpIdea(userId: number, ideaId: number): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/idees-projet/${ideaId}/nombre-soutien?idUtilisateur=${userId}`, {});
  }

  isHelped(userId: number, ideaId: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseUrl}/${userId}/idees-projet/${ideaId}/est-soutenu`)
  }

}
