import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task/task.model';
import { Env } from '../../env';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private data:DataService) { }
  listeTache() {
    return this.data.getData(Env.TACHE);
  }

  getTasksById(tacheId:any): Observable<Task> {
    return this.data.getById(Env.TACHE, tacheId);
  }
}
