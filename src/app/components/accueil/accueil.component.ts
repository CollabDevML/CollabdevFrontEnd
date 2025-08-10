import { Component, inject, OnInit, signal } from '@angular/core';
import { AccueilService } from '../../services/accueil/accueil.service';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { projet } from '../../models/projet/projet';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent implements OnInit {
  soutiensState = signal<{ [key: number]: boolean }>({});

  constructor(private accueilService: AccueilService) {}

  ideeProjets: Ideeprojet[] = [];
  projets: projet[] = [];

  ngOnInit(): void {
    const users_id = Number(localStorage.getItem('user_id'));
    this.accueilService.getRecommandationByideeProjet(1).subscribe((data) => {
      this.ideeProjets = data;
    });
    this.accueilService.getRecommandationByProjet(1).subscribe((data) => {
      this.projets = data;
      throw new Error('Method not implemented.');
    });
  }

  // Vérifie si un projet est soutenu
  isSoutienState(id: number): boolean {
    // return this.soutiensState.get(id) || false;
    return this.soutiensState()[id] || false;
  }
  // Change l'état de soutien pour un projet spécifique
  handelClick(id: number): void {
    if (this.isSoutienState(id)) {
      // Retirer soutien
      this.accueilService.retirerSoutien(id, 1).subscribe({
        next: () => {
          this.soutiensState.update((state) => ({
            ...state,
            [id]: false,
          }));
        },
        error: (err) => console.error('Erreur retrait soutien', err),
      });
    } else {
      // Ajouter soutien
      this.accueilService.soutenirUneIdeeProjet(id, 1).subscribe({
        next: () => {
          this.soutiensState.update((state) => ({
            ...state,
            [id]: true,
          }));
        },
        error: (err) => console.error('Erreur ajout soutien', err),
      });
    }
  }

  //   this.soutiensState.update((state) => ({
  //     ...state,
  //     [id]: !state[id],
  //   }));
  // }
}
