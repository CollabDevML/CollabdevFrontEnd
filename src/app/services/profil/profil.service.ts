import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/userProfil/profilUser';

@Injectable({ providedIn: 'root' })
export class ProfilService {
  constructor(private http: HttpClient) {}

  getProfil(): Observable<User> {
    return this.http.get<User>(
      'http://localhost:8180/utilisateurs/idees-projet'
    );
  }
}
