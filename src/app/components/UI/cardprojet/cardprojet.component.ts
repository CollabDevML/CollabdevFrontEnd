import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-cardprojet',
  imports: [
    NgFor
  ],
  templateUrl: './cardprojet.component.html',
  styleUrl: './cardprojet.component.css'
})
export class CardprojetComponent {
  projets = [
    {
      nom: 'Plateforme de dons',
      description: 'Application de gestion de dons humanitaires.',
      date: '03 août 2025',
      termine: true
    },
    {
      nom: 'Outil de reporting',
      description: 'Tableau de bord pour les indicateurs mensuels.',
      date: '28 juillet 2025',
      termine: false
    },
    {
      nom: 'Refonte site Web',
      description: 'Nouveau design pour la page d’accueil.',
      date: '21 juillet 2025',
      termine: true
    },
    {
      nom: 'Gestion des accès',
      description: 'Module pour la gestion des rôles.',
      date: '15 juillet 2025',
      termine: false
    }
  ];

  get projetsLimites() {
    return this.projets.slice(0, 3);
  }

  voirTousLesProjets() {
    // Logique de redirection, ou router.navigate(['/projets']) si tu veux
    console.log("Redirection vers la liste complète...");
  }

}
