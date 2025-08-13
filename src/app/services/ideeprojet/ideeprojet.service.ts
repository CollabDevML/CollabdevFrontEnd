import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IdeeprojetService {
  private _donneeIdeeProjet = new BehaviorSubject<Ideeprojet | null>(null);
  donneeIdeeProjet$ = this._donneeIdeeProjet.asObservable();
  setDonneeIdeeProjet(projet: Ideeprojet) {
    this._donneeIdeeProjet.next(projet);
    
  }
  
  url='http://localhost:8180/utilisateurs/idees-projet/v2'
  
  
  constructor(private http:HttpClient){}
  Recupererideeprojet():Observable<Ideeprojet[]>{
    return this.http.get<Ideeprojet[]>(this.url);
  }
  
}
