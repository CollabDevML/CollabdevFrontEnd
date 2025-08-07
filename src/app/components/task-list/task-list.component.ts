import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../UI/footer/footer.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // Tableau de tâches utilisant vos attributs backend
  tasks: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        titre: 'Conception de l\'interface utilisateur',
        description: 'Créer les maquettes pour les pages principales de l\'application',
        dateDebut: '2025-08-10',
        dateFin: '30/08/2025', // Corresponds à "Échéance"
        niveau: 'Difficile',
        // --- Attributs nécessaires pour le design (à ajouter à votre backend) ---
        status: 'En cours',
        assignee: {
          name: 'Abdoul Ibrahima Sanaké',
          avatar: 'https://i.pravatar.cc/150?img=1'
        }
      },
      {
        titre: 'Développement de l\'API REST',
        description: 'Implémenter les endpoints pour la gestion des projets',
        dateDebut: '2025-08-12',
        dateFin: '30/08/2025',
        niveau: 'Moyen',
        // --- Attributs nécessaires pour le design (à ajouter à votre backend) ---
        status: 'En cours',
        assignee: {
          name: 'Mohamed Diop',
          avatar: 'https://i.pravatar.cc/150?img=3'
        }
      },
      {
        titre: 'Rédaction de la documentation',
        description: 'Documentation technique du projet CollabDev',
        dateDebut: '2025-08-01',
        dateFin: '28/08/2025',
        niveau: 'Facile',
        // --- Attributs nécessaires pour le design (à ajouter à votre backend) ---
        status: 'Terminée',
        assignee: {
          name: 'Fatoumata Sanogo',
          avatar: 'https://i.pravatar.cc/150?img=5'
        }
      }
    ];
  }
}
