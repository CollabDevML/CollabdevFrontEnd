import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // IMPORTANT : Modifiez cette URL pour qu'elle corresponde à votre API
  private apiUrl = 'http://localhost:8080/api/tasks';

  constructor(private http: HttpClient) { }

  /**
   * Récupère toutes les tâches depuis le backend.
   */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
