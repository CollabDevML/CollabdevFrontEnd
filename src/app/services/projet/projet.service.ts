import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { projet } from '../../models/projet/projet';



@Injectable({
 providedIn: 'root'
})
export class ProjetService {
 urlapi='http://localhost:8180/gestionnaires/projets/v2';
 constructor(private http:HttpClient){}
  

 recupererprojet():Observable<projet[]>{
  console.log(this.urlapi)
   return this.http.get<projet[]>(this.urlapi)
 }
 }




