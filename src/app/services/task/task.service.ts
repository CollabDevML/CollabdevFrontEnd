import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // IMPORTANT : Modifiez cette URL pour qu'elle corresponde à votre API
  private apiUrl = 'http://localhost:8080/utilisateurs/gestionnaires/projets/taches/{tacheId}';

  constructor(private http: HttpClient) { }
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
