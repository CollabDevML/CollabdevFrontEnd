// src/app/services/tache.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Env } from '../env';
import { DataService } from './data.service';
import { Tache } from '../models/tache/tache';

export interface RequestTache {
  titre: string;
  description: string;
  pieceAGagner: number;
  dateDebut: string; // format ISO string
  dateFin: string;
  niveau: string;
  idContributeur: number;
  idProjet: number;
}

export interface ResponseTache {
  id: number;
  titre: string;
  description: string;
  dateDebut: string;
  dateFin: string;
  pieceAGagner: number;
  niveau: string;
  status: String;
}

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private data:DataService) { }
  listeTache() {
    return this.data.getData(Env.TACHE);
  }

  getTasksById(tacheId:any): Observable<Tache> {
    return this.data.getById(Env.TACHE, tacheId);
  }
}
