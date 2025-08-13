import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class testapi{
    url='http://localhost:8180/utilisateurs/idees-projet/v2'
     constructor(private http:HttpClient){}
     recuper():Observable<any>{
        return this.http.get<any>(this.url);
     }
}