import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task/task.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../UI/footer/footer.component';
import { SideBarComponent } from '../UI/side-bar/side-bar.component';
import { HeaderComponent } from '../UI/header/header.component';
import { GestionnaireDataService } from '../../services/gestionnaire/gestionnaire-data.service';

interface DisplayTask extends Task {
  status: string;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: DisplayTask[] = [];
  public filteredTasks: DisplayTask[] = [];

  public searchQuery: string = '';
  public selectedStatus: string = 'all';

  constructor(private taskService: TaskService,private data:GestionnaireDataService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
    console.log(this.data.dataProjet.id)
    this.data.listeTache(this.data.dataProjet.id).subscribe({
      next: (tasks) => {
        console.log(tasks)
        this.tasks = tasks.map((task: { estFini: any; }) => ({
          ...task,
          status: task.estFini ? 'Terminée' : 'À faire',
        }));
        this.filteredTasks = [...this.tasks];
      },
      error: (error) => {
        console.log('Erreur lors du chargement : ' + error);
      }
    });
  }

  filterTasks(): void {
    const query = this.searchQuery.trim().toLowerCase();
    this.filteredTasks = this.tasks.filter(task => {
      const matchesSearch =
        !query ||
        task.titre.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query);
      const matchesStatus =
        this.selectedStatus === 'all' || task.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }

  countTasksByStatus(status: string): number {
    return this.tasks.filter(task => task.status === status).length;
  }

  trackByTaskId(index: number, task: DisplayTask): number {
    return task.id;
  }

  addTask(): void {
    console.log('Ajouter une nouvelle tâche (fonctionnalité à implémenter)');
  }
}
