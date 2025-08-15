import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestIdeeProjet } from '../../models/ideeprojet/request-idee-projet';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';

@Injectable({
  providedIn: 'root'
})
export class IdeeProjetServiceService {
    // L'URL pour l'envoi des données du formulaire
  private apiProjetUrl = 'http://localhost:8180/utilisateurs';
  
  // L'URL pour l'upload de fichier. Elle doit correspondre au contrôleur backend.
  private uploadUrl = 'http://localhost:8180/upload';

  constructor(private http: HttpClient) {}

  /**
   * Envoie un fichier au backend.
   * @param file Le fichier à uploader.
   * @returns Un Observable contenant le chemin du fichier (chemin: string) en cas de succès.
   */
  uploadFile(file: File): Observable<{ chemin: string }> {
    const formData = new FormData();
    // Les noms des paramètres ici doivent correspondre à ce que le backend attend.
    formData.append('file', file, file.name);
    formData.append('fileName', file.name);
    formData.append('type', 'CDC'); // Le type de fichier attendu par votre service d'upload.

    return this.http.post<{ chemin: string }>(this.uploadUrl, formData);
  }

  /**
   * Envoie les données d'une idée de projet au backend.
   * @param idPorteur L'ID de l'utilisateur.
   * @param ideeProjet Les données de l'idée de projet, y compris l'URI du fichier.
   * @returns Un Observable contenant l'idée de projet créée.
   */
  ajouterIdeeProjet(idPorteur: number, ideeProjet: RequestIdeeProjet): Observable<Ideeprojet> {
    const url = `${this.apiProjetUrl}/${idPorteur}/idees-projet`;
    return this.http.post<Ideeprojet>(url, ideeProjet);
  }  
  }


