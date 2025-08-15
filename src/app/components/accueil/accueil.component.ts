import { Component, inject, OnInit, signal } from '@angular/core';
import { AccueilService } from '../../services/accueil/accueil.service';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { projet } from '../../models/projet/projet';
import { ElapsedTimePipe } from '../../pipes/elapsed-time.pipe';

@Component({
  selector: 'app-accueil',
  imports: [ElapsedTimePipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent implements OnInit {
  soutiensState = signal<{ [key: number]: boolean }>({});

  constructor(private accueilService: AccueilService) {}

  ideeProjets: Ideeprojet[] = [];
  projets: projet[] = [];
  users_id = Number(localStorage.getItem('user_id'));

  ngOnInit(): void {
    this.accueilService
    .getRecommandationByideeProjet(this.users_id)
    .subscribe((data) => {
      // Conversion Date -> string ISO
      this.ideeProjets = data.map((idee: any) => ({
        ...idee,
        datePublication: new Date(idee.datePublication).toISOString()
      }));
    });
    console.log("Id de l'utilisateur : ", this.users_id);
    this.accueilService
      .getRecommandationByProjet(this.users_id)
      .subscribe((data) => {
        this.projets = data;
         console.log('Projets reçus :', this.projets);
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
      this.accueilService.retirerSoutien(id, this.users_id).subscribe({
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
      this.accueilService.soutenirUneIdeeProjet(id, this.users_id).subscribe({
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
}
