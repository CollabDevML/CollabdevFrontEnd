import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../UI/header/header.component";
import { SideBarComponent } from "../UI/side-bar/side-bar.component";
import { FooterComponent } from "../UI/footer/footer.component";

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, SideBarComponent, FooterComponent],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      assignee: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reward: [100, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log('Tâche soumise :', this.taskForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }

  voirToutesTaches() {
  // Redirige ou affiche la liste des tâches
  // Exemple : this.router.navigate(['/mes-taches']);
}
}
