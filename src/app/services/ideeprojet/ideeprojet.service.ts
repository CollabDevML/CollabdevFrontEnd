import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { BehaviorSubject } from 'rxjs';
import { ResponseIdeeProjet2 } from '../../models/ideeprojet/response-idee-projet2';


@Injectable({
  providedIn: 'root'
})
export class IdeeprojetService {

  private donneeIdeeProjet = new BehaviorSubject<Ideeprojet | null>(null);
  donneeIdeeProjet$ = this.donneeIdeeProjet.asObservable();
   setDonneeIdeeProjet(projet: Ideeprojet) {
    this.donneeIdeeProjet.next(projet);
    sessionStorage.setItem('ideeprojet',JSON.stringify(projet))
  }
  private apiUrl = 'http://localhost:8180/utilisateurs/idees-projet/v2';

  constructor(private http:HttpClient){
    const save=sessionStorage.getItem('ideeprojet')
    if(save){
     this.donneeIdeeProjet.next(JSON.parse(save));
    }
  }

  getAll(): Observable<ResponseIdeeProjet2[]> {
    return this.http.get<ResponseIdeeProjet2[]>(this.apiUrl);
  }
  Recupererideeprojet():Observable<Ideeprojet[]>{
    return this.http.get<Ideeprojet[]>(this.apiUrl);
  }

  
  
}
