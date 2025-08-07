import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeeProjetServiceService {
  private apiUrl = 'http://localhost:8180/utilisateurs/idees-projet'
  constructor(private http: HttpClient){}
  envoyerIdee(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
