import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TacheService, ResponseTache } from '../../../services/tache.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../UI/header/header.component";
import { FooterComponent } from "../../UI/footer/footer.component";
import { SideBarComponent } from "../../UI/side-bar/side-bar.component";

@Component({
  selector: 'app-liste-taches',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, SideBarComponent],
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent implements OnInit {
  taches: ResponseTache[] = [];
  filteredTaches: [] = [];

  public searchQuery: string = '';
  public selectedStatus: string = 'all';

  loading = false;
  errorMessage = '';
  projetId = 1; // Exemple : à passer dynamiquement selon ton contexte

  constructor(private tacheService: TacheService) {}

  ngOnInit(): void {
    this.fetchTaches();
  }

  fetchTaches(): void {
    this.loading = true;
    this.errorMessage = '';
    this.tacheService.getTaches(this.projetId).subscribe({
      next: (data) => {
        this.taches = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement des tâches.';
        this.loading = false;
      }
    });
  }

  filterTasks(): void {
    const query = this.searchQuery.trim().toLowerCase();
    this.taches = this.taches.filter(task => {
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
    return this.taches.filter(task => task.status === status).length;
  }

  trackByTaskId(index: number, task: ResponseTache): number {
    return task.id;
  }


  addTask(): void {
    console.log('Ajouter une nouvelle tâche (fonctionnalité à implémenter)');
  }
}
