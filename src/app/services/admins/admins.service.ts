import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAdmins } from '../../models/admins/response-admins';
import { ResponseStats } from '../../models/admins/response-stats';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  private baseUrl: string = 'http://localhost:8180/administrateurs';

  constructor(private httpClient: HttpClient){}

  getAdminById(idAdmin: number): Observable<ResponseAdmins> {
    return this.httpClient.get<ResponseAdmins>(`${this.baseUrl}/${idAdmin}`);
  }

  getStats(): Observable<ResponseStats> {
    return this.httpClient.get<ResponseStats>(`${this.baseUrl}/stats`);
  }
  
}
