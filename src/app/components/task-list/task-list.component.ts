import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../UI/footer/footer.component';
import { SideBarComponent } from "../UI/side-bar/side-bar.component";
import { HeaderComponent } from '../UI/header/header.component';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task/task.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FooterComponent, SideBarComponent, HeaderComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // Tableau de tâches utilisant vos attributs backend
  public tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
