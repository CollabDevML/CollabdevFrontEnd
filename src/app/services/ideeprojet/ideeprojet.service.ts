import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { ResponseIdeeProjet2 } from '../../models/ideeprojet/response-idee-projet2';

@Injectable({
  providedIn: 'root'
})
export class IdeeprojetService {

  url='http://localhost:8180/utilisateurs/idees-projet/v2'
  private apiUrl = 'http://localhost:8180/utilisateurs/idees-projet/v2';
  constructor(private http:HttpClient){}

  getAll(): Observable<ResponseIdeeProjet2[]> {
    return this.http.get<ResponseIdeeProjet2[]>(this.apiUrl);
  }
  Recupererideeprojet():Observable<Ideeprojet[]>{
    return this.http.get<Ideeprojet[]>(this.url);
  }
  
}
