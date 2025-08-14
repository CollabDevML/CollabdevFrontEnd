import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private apiUrl = 'http://localhost:8180/'; 

  constructor(private http: HttpClient) {}

  // Méthode pour quitter un projet
  quitterProjet(projetId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${projetId}`);
  }
}
